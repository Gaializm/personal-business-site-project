import data from '../data/data.json';
import styles from '../styles/about.module.css';
import placeholder from '../assets/placeholderProjectImage.jpg';
import babybelle from "../assets/babybelle.jpg"
import Wrapper from "../components/Wrapper"

const imageMap = {
  1: babybelle,
  2: placeholder,
};

const AboutPage = () => {
  return (
    <div className={styles.infos}>
      <h1>About Page</h1>
      {data.map((item) => (
        <div key={item.id} className={styles.sections}>
          <img
            className={styles.images}
            src={imageMap[item.id] || placeholder}
            alt={item.name}
          />
          <div className={styles.texts}>
            <h2>{item.name}</h2>
            <p>{item.about}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutPage;
