"use client";

import { handleCredentialsLogin, handleGithubLogin } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(handleCredentialsLogin, undefined);

  return (
    <>
      <form className={styles.form} action={formAction}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login with Credentials</button>

        {state?.error && (
          <span className={styles.error_log}>{state?.error}</span>
        )}
      </form>

      <div className={styles.separator}>
        <label>Or</label>
      </div>

      <form action={handleGithubLogin} className={styles.githubForm}>
        <button>Login with Github</button>
      </form>
    </>
  );
};

export default LoginForm;
