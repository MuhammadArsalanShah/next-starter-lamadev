import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/11703911/pexels-photo-11703911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>13.09.2024</span>
      </div>

      <div className={styles.bottom}>
        <h1 className={styles.title}>Some Title for the Post ...</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi animi
          ab nostrum fugit quidem reiciendis doloribus porro excepturi, sequi
          illo architecto deleniti modi est voluptatibus temporibus harum
          adipisci impedit! Facilis ...
        </p>
        <Link href="/blog/post" className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
