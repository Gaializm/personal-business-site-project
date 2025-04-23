import styles from "../styles/footer.module.css";
import instagram from "../assets/instagram.png";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <p>Placeholder Text</p>
                </div>
                <div className={styles.socials}>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src={instagram} alt="instagram" className={styles.instagram} />
                    </a>
                </div>
                <div className={styles.top} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <p>^</p>
                </div>
            </div>
        </footer>
    )
};
export default Footer;