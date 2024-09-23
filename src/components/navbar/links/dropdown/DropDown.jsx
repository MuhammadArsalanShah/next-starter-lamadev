"use client";

import styles from "./dropDown.module.css";
import Image from "next/image";
import NavLink from "../navLinks/NavLink";
import { handleLogout } from "@/lib/action";
import { useState } from "react";

const DropDown = ({ session }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <div className={styles.dropdown}>
      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={styles.userdropbar}
      >
        <Image
          src={session.user.img || "/noAvatar.png"}
          alt="user display photo"
          width={50}
          height={50}
        />
        <div>
          <p>{session.user.username}</p>
          <span>{session.user?.isAdmin ? "Admin" : "Common user"}</span>
        </div>
      </div>

      {isOpen && (
        <div className={styles.dropdownContent}>
          {session.user?.isAdmin ? (
            <NavLink item={{ title: "Admin Panel", path: "/admin" }} />
          ) : (
            <NavLink item={{ title: "My Profile", path: "/profile" }} />
          )}
          <form action={handleLogout}>
            <button className={styles.logout}>Logout</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DropDown;
