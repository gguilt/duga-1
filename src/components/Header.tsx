import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header_area}>
        <div className={styles.logo}>DUGA-1 Solutions</div>
        <div className={styles.header}>
        <div className={styles.button_set}>
        <Link className={styles.button} href="/">Home</Link>
        <Link className={styles.button} href="/pricing">Pricing</Link>
        <Link className={styles.button} href="/solutions">Solutions</Link>
        </div>
        Login
        Sign-up
        </div>
      </header>
    );
}