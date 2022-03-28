import Link from "next/link";
import styles from "../styles/Nav.module.css";

export default function Nav(){
    return (
        <nav className={styles.nav}>
        <ul>
        <li className={styles.li}> <Link href='/'>Todo</Link> </li>
        </ul>
        </nav>
    );
}