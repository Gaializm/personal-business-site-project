import React, { useState } from 'react';
import style from '../Styles/Accordion.module.css'; 

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={style.accordion}>
            {items.map((item, index) => (
                <div className={style['accordion-item']} key={index}>
                    <div
                        className={style['accordion-title']}
                        onClick={() => handleItemClick(index)}
                    >
                        {item.title}
                        <span>{activeIndex === index ? '-' : '+'}</span>
                    </div>

                    <div className={`${style['accordion-content']} ${activeIndex === index ? style.open : ''}`}>
                        {activeIndex === index && item.content}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;