"use client"

import { handleCredentialsLogin, handleGithubLogin } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from 'react-dom';
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {

  const [state, formAction] = useFormState(handleCredentialsLogin, undefined);
  // const router = useRouter();

  // useEffect(() => {
  //   state?.success && router.push("/");
  // }, [state?.success, router])

  return (
    <>
      <form className={styles.form} action={formAction}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login with Credentials</button>
      </form>

      {state?.error}

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
