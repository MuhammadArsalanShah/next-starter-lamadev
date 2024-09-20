import styles from "./login.module.css";
import Link from "next/link";
import LoginForm from "@/components/loginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm />
        <Link href="/register" className={styles.link}>Don&apos;t have an account? <b>Signup</b></Link>
      </div>
    </div>
  );
};

export default LoginPage;
