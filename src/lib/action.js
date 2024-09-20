"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

/*************  Add & Delete Posts *************/
export const addPost = async (prevState, formdata) => {
  // const title = formdata.get("title");
  // const desc = formdata.get('desc');
  // const slug = formdata.get('slug');

  // destructure it like this

  const { title, desc, slug, userId } = Object.fromEntries(formdata);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("New post Saved to DB");
    revalidatePath("/blog");
    revalidatePath("/admin");

  } catch (error) {
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formdata) => {
  const { id } = Object.fromEntries(formdata);

  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("Post Deleted from DB");
    revalidatePath("/blog");
    revalidatePath("/admin");

  } catch (error) {
    return { error: "Something went wrong!" };
  }
};

/************* Add & Delete Users *************/
export const addUser = async (prevState, formdata) => {

  const { username, email, password, img } = Object.fromEntries(formdata);

  try {
    connectToDb();
    const newUser = new User({ username, email, password, img });

    await newUser.save();
    console.log("New User Saved in DB");
    revalidatePath("/admin");

  } catch (error) {
    return { error: "Something went wrong!" };
  }
};

export const deleteUser = async (formdata) => {
  const { id } = Object.fromEntries(formdata);

  try {
    connectToDb();

    await Post.deleteMany({userId:id});
    await User.findByIdAndDelete(id);
    console.log("User Deleted from DB");
    revalidatePath("/admin");

  } catch (error) {
    return { error: "Something went wrong!" };
  }
};

/************* Other handle functions *************/

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleCredentialsLogin = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password!" };
    }

    throw error;
  }
};

export const register = async (previousState, formData) => {
  const { username, email, password, passwordRepeat, img } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Password do not match!" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: `User "${user.username}" already exists!` };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const handleLogout = async () => {
  await signOut();
};
