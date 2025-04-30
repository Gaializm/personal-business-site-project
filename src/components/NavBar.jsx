import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from './ThemeToggle';
import styles from "../styles/navbar.module.css";

const Navbar = ({ mode, setMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/">ctrl + alt + create</Link>
            </div>

            <div className={styles.themeToggle}>
                <ThemeToggle mode={mode} setMode={setMode} />
            </div>

            <button className={styles.menuButton} onClick={toggleMenu}>
                ☰
            </button>

            <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <li>
                    <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
                </li>
                <li>
                    <Link to="/work" onClick={() => setIsOpen(false)}>OUR WORK</Link>
                </li>
                <li>
                    <Link to="/services" onClick={() => setIsOpen(false)}>OUR SERVICES</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
