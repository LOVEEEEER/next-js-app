import Link from "next/link";
import styles from "../styles/anchor.module.scss";

const Anchor = ({ text, href }) => {
  return (
    <Link {...{ href }}>
      <span className={styles.link}>{text}</span>
    </Link>
  );
};

export default Anchor;
