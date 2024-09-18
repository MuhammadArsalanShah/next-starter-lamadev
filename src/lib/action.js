"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost= async (formdata) => {

  // const title = formdata.get("title");
  // const desc = formdata.get('desc');
  // const slug = formdata.get('slug');

  // destructure it like this

  const {title, desc, slug, userId} = Object.fromEntries(formdata);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log('Saved to DB');
    revalidatePath("/blog");
  } catch (error) {
    return { error: "Something went wrong!"}
  }
}

export const deletePost= async (formdata) => {

  const { id } = Object.fromEntries(formdata);

  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log('Deleted from DB');
    revalidatePath("/blog");
  } catch (error) {
    return { error: "Something went wrong!"}
  }
}