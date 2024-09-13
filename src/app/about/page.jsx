import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <div className={styles.imageContainer}>
        {/* <Image src="/about.png" alt="" fill /> */}
        <Image src="https://images.pexels.com/photos/28209723/pexels-photo-28209723/free-photo-of-women-overlooking-city-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill />
      </div>
    </div>
  );
};

export default AboutPage;
