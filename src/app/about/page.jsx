import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About",
  description: "About page description",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better
        </h1>
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We&apos;re
          world&apos;s Our speacial Team best consulting & finance solutiion
          proveider. Wide range of web and software development services
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="picture of the author"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;

// local image vs online image
/*
<h1>About Page</h1>
<div className={styles.imageContainer}>
  <Image src="/about.png" alt="" fill /> 
  <Image src="https://images.pexels.com/photos/28209723/pexels-photo-28209723/free-photo-of-women-overlooking-city-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill />
</div>
*/
