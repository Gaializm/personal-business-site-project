import data from '../data/data.json';
import Wrapper from "../components/Wrapper";
import placeholder from '../assets/placeholder.png';

const imageMap = {
  "placeholder.png": placeholder,
};

const AboutPage = () => {
  return (
    <Wrapper>
      <div className="about-info">
        {data.map((item, index) => (
          <div key={item.id} className={`about-section ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <img
              className="about-image"
              src={imageMap[item.image] || placeholder}
              alt={item.name}
            />
            <div className="about-text" style={{ textAlign: item.id === 1 ? 'right' : 'left' }}>
              <h2>{item.name}</h2>
              <p>{item.about}</p>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default AboutPage;
