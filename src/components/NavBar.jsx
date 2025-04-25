import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";
const Navbar = () => {
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/">ctrl + alt + create</Link>
            </div>
            <ul className={styles.navLinks}>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/work">OUR WORK</Link>
                </li>
                <li>
                    <Link to="/services">OUR SERVICES</Link>
                </li>
                <li>
                    <Link to="/contact">CONTACT</Link>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;