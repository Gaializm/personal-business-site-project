import { useState, useEffect, useRef, memo } from 'react';
import responses from '../data/responses.json';
import style from '../styles/chatbot.module.css';

const Chatbot = memo(() => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = {
            sender: 'user',
            text: input,
        };
        setMessages(prev => [...prev, userMessage]);

        const reply = getBotReply(input);

        setTimeout(() => {
            const botMessage = {
                sender: 'bot',
                text: reply,
            };
            setMessages(prev => [...prev, botMessage]);
        }, 1000);

        setInput('');
    };

    const getBotReply = (userInput) => {
        const lowerInput = userInput.toLowerCase();
        for (const category in responses) {
            if (category === 'default') continue;
            const { patterns, responses: replyList } = responses[category];
            if (patterns.some(pattern => lowerInput.includes(pattern))) {
                return replyList[Math.floor(Math.random() * replyList.length)];
            }
        }
        const defaultReplies = responses.default.responses;
        return defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className={style["chat-container"]}>
            <h2 className={style["chat-header"]}> Chat with CreateBot </h2>
            <div className={style["chat-box"]}>
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`${style["message"]} ${msg.sender === 'user' ? style["user"] : style["bot"]}`}
                    >
                        <span className={style["text"]}>{msg.text}</span>
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>
            <div className={style["input-area"]}>
                <input
                    className={style["input"]}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Say something..."
                />
                <button className={style["send-button"]} onClick={handleSend}>
                    Send
                </button>
            </div>
        </div>
    );
});

export default Chatbot;