import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// FETCh DATA WITH AN API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {cache: "no-store"});

  if (!res.ok) {
    throw new Error("Something went wrong here!");
  }

  return res.json();
};

const BlogPage = async () => {

  // FETCh DATA WITH AN API
  const posts = await getData();

  // FETCh DATA WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
