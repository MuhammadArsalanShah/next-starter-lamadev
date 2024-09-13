import styles from "./links.module.css";
import NavLink from "./navLinks/NavLink";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  return (
    <div className={styles.links}>
      {links.map(link => (
        <NavLink item={link} key={link.title} />
      ))}
    </div>
  );
};

export default Links;
