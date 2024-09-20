"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const addPost = async (formdata) => {
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
    console.log("Saved to DB");
    revalidatePath("/blog");
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formdata) => {
  const { id } = Object.fromEntries(formdata);

  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("Deleted from DB");
    revalidatePath("/blog");
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
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
