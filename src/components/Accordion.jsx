import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div className="accordion-item" key={index}>
                    <div
                        className="accordion-title"
                        onClick={() => handleItemClick(index)}
                    >
                        {item.title}
                        <span>{activeIndex === index ? '-' : '+'}</span>
                    </div>
                    <div
                        className={`accordion-content ${activeIndex === index ? 'open' : ''
                            }`}
                    >
                        {item.content}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Accordion;