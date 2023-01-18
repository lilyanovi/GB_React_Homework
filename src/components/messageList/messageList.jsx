import style from'./messageList.module.css'

export function MessageList ({ messages }){
    return (
        <div>
            <h1>Welcome to chat</h1>
            <ul className={style.messages}>
                {messages?.map((message, index) => (
                    <li className={style.text} key={index}>
                        {message.author} : {message.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}