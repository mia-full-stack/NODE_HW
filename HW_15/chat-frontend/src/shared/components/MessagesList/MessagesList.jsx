

import styles from "./MessagesList.module.css";

const MessagesList = ({ items = [] }) => {


    const elements = items.map((msg, idx) => (
        <li key={idx}>
            <p><strong>{msg.author}:</strong> {msg.text}</p>
        </li>
    ));

    return (
        <div className={styles.messagesBox}>
            {!items?.length && <p>Сообщений пока нет</p>}
            <ul>{elements}</ul>
        </div>
    )
};

export default MessagesList;