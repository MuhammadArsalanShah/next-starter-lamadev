import { handleCredentialsLogin, handleGithubLogin} from "@/lib/action";
import styles from "./login.module.css";

const LoginPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

        <form action={handleCredentialsLogin} className={styles.form}>
          <input type="text" placeholder="username" name="username" />
          <input type="password" placeholder="password" name="password" />
          <button>Login with Credentials</button>

        </form>


        <form action={handleGithubLogin}>
          <button>Login with Github</button>
        </form>

      </div>
    </div>
  );
};

export default LoginPage;
