import data from '../data/data.json';
import styles from '../styles/about.module.css';
import placeholder from '../assets/placeholderProjectImage.jpg';

const imageMap = {
  "placeholderProjectImage.jpg": placeholder,
};

const AboutPage = () => {
  return (
    <div className={styles.infos}>
      <h1>About Page</h1>
      {data.map((item) => (
        <div key={item.id} className={styles.sections}>
          <img
            className={styles.images}
            src={imageMap[item.image] || placeholder}
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
