import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import styles from "../styles/notfound.module.css";

const NotFound = () => {
  return (
    <Wrapper>
      <div className={styles["notfound-wrapper"]}>
        <h1 className={styles["notfound-title"]}>404</h1>
        <p className={styles["notfound-message"]}>Sorry, the page you are looking for is not found.</p>
        <Link to="/" className={styles["notfound-link"]}>Go back to Home</Link>
      </div>
    </Wrapper>
  );
};

export default NotFound;
