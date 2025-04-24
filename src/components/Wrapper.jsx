import style from '../Styles/Wrapper.module.css';

const Wrapper = ({ children, className = '' }) => {
    return (
        <div className={`${style.section} ${className}`}>
            <div className={style.container}>
                {children}
            </div>
        </div>
    );
};

export default Wrapper;