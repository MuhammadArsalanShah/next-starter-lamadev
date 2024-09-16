import Image from "next/image";
import styles from "./singleBlog.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";

const getData = async (slug) => {

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong here!");
  }

  return res.json();
};

const SingleBlogPage = async ({ params }) => {

  const { slug } = params;

  const post = await getData(slug)
  return <div className={styles.container}>

    <div className={styles.imgContainer}>
      <Image 
        src="https://images.pexels.com/photos/11703911/pexels-photo-11703911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        fill
        className={styles.img}
      />
    </div>

    <div className={styles.textContainer}>
      <h1 className={styles.title}>{post.title}</h1>

      <div className={styles.detail}>
      <Image 
        src="https://images.pexels.com/photos/12634535/pexels-photo-12634535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width={50}
        height={50}
        className={styles.userAvatar}
      />
      <Suspense fallback={<div>Loading ...</div>}>
        <PostUser userId={post.userId}/>
      </Suspense>
      

      <div className={styles.detailText}>
        <span className={styles.detailTitle}>Published</span>
        <span className={styles.detailValue}>13.09.2024</span>
      </div>
      </div>

      <div className={styles.content}>
        {post.body}
      </div>
    </div>

  </div>;
};

export default SingleBlogPage;