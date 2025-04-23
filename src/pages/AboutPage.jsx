import data from '../data/data.json';
import Wrapper from "../components/Wrapper"

const AboutPage = () => {
    return (
        <Wrapper>
            <div className="about-info">
                {data.map((item, index) => (
                    <div key={item.id} className={`about-section ${index % 2 !== 0 ? 'reverse' : ''}`}>
                        <img className="about-image" src={item.image} alt={item.name} />
                        <div className="about-text">
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