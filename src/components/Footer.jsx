import styles from "../styles/footer.module.css";
import instagram from "../assets/instagram.png";
import x from "../assets/x.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import pinterest from "../assets/pinterest.png";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <p>CGT 390 - Final Project</p>
                </div>
                <div className={styles.socials}>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src={instagram} alt="instagram" className={styles.instagram} />
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank">
                        <img src={linkedin} alt="linkedin" className={styles.instagram} />
                    </a>
                    <a href="https://www.x.com/" target="_blank">
                        <img src={x} alt="x" className={styles.instagram} />
                    </a>
                    <a href="https://www.pinterest.com/" target="_blank">
                        <img src={pinterest} alt="pinterest" className={styles.instagram} />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src={facebook} alt="facebook" className={styles.instagram} />
                    </a>
                </div>
                <div className={styles.top} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <p>BACK TO TOP ^</p>
                </div>
            </div>
        </footer>
    )
};
export default Footer;