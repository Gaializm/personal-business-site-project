import FeaturedProjects from '../components/FeaturedProjects';
import placeholder from '../assets/placeholder.png';
import Banner from '../components/Banner';
import styles from '../styles/about.module.css';

const HomePage = () => {
    return (

        <>
            <div>
            <Banner />
            </div>
            <div>
                <h1>Welcome</h1>
            </div>
            <div className={styles.infos}>
                <h1>About the Team</h1>
                    <div className={styles.sections}>
                        <img
                            className={styles.images}
                            src={placeholder}
                            alt={"the team"}
                        />
                        <div className={styles.texts}>
                            <h2>{'The Story of ctrl + alt + create'}</h2>
                        <p>Hi! We are Belle and Gaia, the developers behind ctrl + alt + create. Our journey started at Purdue University, where we both studied Web Programming and Design. Our team came together
                            through shared experiences in classes and a mutual love for web development. We are passionate about creating beautiful and functional websites that not only meet our clients' needs but also exceed their expectations.
                            we offer a variety of computer graphics related services and are eager to partner with you to create an unforgettable digital experience. Take a look around our site and peek at our work to learn more!
                        </p>
                        </div>
                    </div>
            </div>
            <div>
                <FeaturedProjects />
            </div>


        </>
    );
};
export default HomePage;