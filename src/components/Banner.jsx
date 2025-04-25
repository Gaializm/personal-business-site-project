import bannerImage from '../assets/placeholderBanner.png';
import style from '../styles/Banner.module.css';

const Banner = () => {
    return (
        <div className={style["banner"]}>
            <img src={bannerImage} alt="banner" />
        </div>
    );
}

export default Banner;