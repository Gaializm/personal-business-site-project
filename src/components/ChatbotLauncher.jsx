import { useState } from 'react';
import Chatbot from './Chatbot';
import style from '../Styles/chatbotLauncher.module.css'; 

const ChatbotLauncher = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatbot = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <>
            <div className={style.launcher}>
                <button onClick={toggleChatbot} className={style.launcherButton}>
                    {isOpen ? 'Close Chat' : 'Chat 💬'}
                </button>
            </div>
            {isOpen && (
                <div className={style.chatbotWrapper}>
                    <Chatbot />
                </div>
            )}
        </>
    );
};

export default ChatbotLauncher;