"use client";

import { addUser } from "@/lib/action";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="Username" />
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <input type="password" name="passwordRepeat" placeholder="Confirm Password" />
      <input type="text" name="img" placeholder="User image" />
      <select name="isAdmin">
        <option value="false" disabled selected>Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>

      {state?.error && <span className={styles.error_log}>{state?.error}</span>}

      <button>Add User</button>
    </form>
  );
};

export default AdminUserForm;
