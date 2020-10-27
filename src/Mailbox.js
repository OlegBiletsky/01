import React from 'react'



function Mailbox(props) {
    const unreadMessage = props.unreadMessage;
    return(
        <div>
            <h1>Доброго дня!</h1>
            {unreadMessage.length > 0 && <h2>У вас {unreadMessage.length} непрочитаних повідомлень</h2>}
        </div>
    )
}
export default Mailbox;