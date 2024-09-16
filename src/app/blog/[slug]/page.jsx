import Image from "next/image";
import styles from "./singleBlog.module.css";

const SingleBlogPage = ({ params }) => {

  console.log(params)
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
      <h1 className={styles.title}>Some Title for the Post ...</h1>

      <div className={styles.detail}>
      <Image 
        src="https://images.pexels.com/photos/12634535/pexels-photo-12634535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width={50}
        height={50}
        className={styles.userAvatar}
      />

      <div className={styles.detailText}>
        <span className={styles.detailTitle}>Author</span>
        <span className={styles.detailValue}>Arsalan Shah</span>
      </div>

      <div className={styles.detailText}>
        <span className={styles.detailTitle}>Published</span>
        <span className={styles.detailValue}>13.09.2024</span>
      </div>
      </div>

      <div className={styles.content}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, fugit nulla perspiciatis voluptate veniam recusandae corrupti possimus molestiae! Perspiciatis, earum maiores! Debitis temporibus repudiandae nulla fuga corrupti cum ipsa numquam ...
      </div>
    </div>

  </div>;
};

export default SingleBlogPage;