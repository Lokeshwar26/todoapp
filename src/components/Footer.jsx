import styles from "./Footer.module.css";
export default function Footer({ completed, total }) {
  return (
    <div className={styles.footer}>
      <span className={styles.footertext}>
        completed todos: {completed}, total todos: {total}
      </span>
    </div>
  );
}
