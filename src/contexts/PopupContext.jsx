import React, { createContext, useState, useEffect } from 'react';
import cat from "../assets/Cat.png";
import deer from "../assets/Deer.png";
import dino from "../assets/Dino.png";
import elephant from "../assets/Elephant.png";
import giraffe from "../assets/Giraffe.png";
import tiger from "../assets/Tiger.png";
import audio1 from "../assets/audio1.mp3"
import audio2 from "../assets/audio2.mp3";
import audio3 from "../assets/audio3.mp3";
import audio4 from "../assets/audio4.mp3";
import audio5 from "../assets/audio5.mp3";
import audio6 from "../assets/audio6.mp3";

export const PopupContext = createContext();

const PopupContextProvider = ({ children }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupData, setPopupData] = useState(null);

  const images = [cat, deer, dino, elephant, giraffe, tiger]; // Add your images
  const audios = [audio1, audio2, audio3, audio4, audio5, audio6]; // Add your audio files
  const texts = ['scroll faster', 'DO NOT IGNORE ME', 'RUDE', 'ur annoying', 'tehe', 'lol']; // Add your text messages

  useEffect(() => {
    const popupInterval = setInterval(() => {
      // Randomly pick data for the popup
      const randomImage = images[Math.floor(Math.random() * images.length)];
      const randomAudio = audios[Math.floor(Math.random() * audios.length)];
      const randomText = texts[Math.floor(Math.random() * texts.length)];

      setPopupData({
        image: randomImage,
        audio: randomAudio,
        text: randomText,
      });

      setPopupVisible(true);

      // Hide the popup after a short time
      setTimeout(() => {
        setPopupVisible(false);
      }, 2000); // popup visible for 5 seconds (adjust as needed)
    }, Math.random() * (60000 - 30000) + 30000); // Popup interval between 30 and 60 seconds

    return () => clearInterval(popupInterval);
  }, [images, audios, texts]);

  return (
    <PopupContext.Provider value={{ isPopupVisible, setPopupVisible, popupData }}>
      {children}
    </PopupContext.Provider>
  );
};

export default PopupContextProvider;
