import bannerImage from '../assets/Banner6.jpg';
import style from '../styles/Banner.module.css';

const Banner = () => {
    return (
        <div className={style["banner"]}>
            <img src={bannerImage} alt="banner" />
        </div>
    );
}

export default Banner;