import React, { useState, useEffect, useContext } from 'react';
import { PopupContext } from '../contexts/PopupContext';
import styles from '../styles/popup.module.css';

const Popup = () => {
  const { isPopupVisible, setPopupVisible, popupData } = useContext(PopupContext);
  const [image, setImage] = useState('');
  const [audio, setAudio] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    // Set the popup data (image, text, and audio) when it becomes visible
    if (popupData) {
      setImage(popupData.image);
      setAudio(popupData.audio);
      setText(popupData.text);
    }
  }, [popupData]);

  useEffect(() => {
    if (isPopupVisible) {
      const sound = new Audio(audio);
      sound.play();
    }
  }, [isPopupVisible, audio]);

  const handleClose = () => {
    setPopupVisible(false);
  };

  return isPopupVisible ? (
    <div className={styles.popupOverlay} onClick={handleClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Popup Image" className={styles.popupImage} />
        <p className={styles.popupText}>{text}</p>
        {/* <button className={styles.closeButton} onClick={handleClose}>
          Close
        </button> */}
      </div>
    </div>
  ) : null;
};

export default Popup;
