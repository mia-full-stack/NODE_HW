import { useState, useEffect } from "react";
import io from "socket.io-client";

import MessagesList from "../../shared/components/MessagesList/MessagesList";
import MessageForm from "../../shared/components/messageForm/messageForm";

// import styles from "./Chat.module.css";

const socket = io.connect(`${import.meta.env.VITE_WEBSOCKET_URL}`);

const Chat = () => {

    const [messagesAll, setMessagesAll] = useState([]);

    const submitForm = (message) => {
        
        const newMessage = { author: "User", text: message };
        setMessagesAll(prev => [...prev, newMessage]);
        socket.emit("message", message);
    };

    useEffect(() => {

        socket.on("welcome", (message) => {
            setMessagesAll(prev => [...prev, { author: "Server", text: message }]);
        });
        socket.on("reply", (message) => {
            setMessagesAll(prev => [...prev, { author: "Server", text: message }]);
        });

        return () => {
            socket.off("welcome");
            socket.off("reply");
        };
    }, []);

    return (
        <main>
            <h1>Simple chat</h1>
            <MessagesList items={messagesAll} />
            <MessageForm submitForm={submitForm} />
        </main>
    )
};

export default Chat;