import React from 'react'

let dataArray = {
    author: {
        name: "King Kun",
        avatarUrl: "https://loremflickr.com/320/240"
    },
    text: "lorem20loremlorem20loremlorem20lorem",
    data: new Date().toLocaleString(),
}

function Avatar (props) {
    return(
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    )
}
function UserInfo (props) {
    return (
            <div className="UserInfo">
                <Avatar user={props.user}/>
                <div className="UserInfo-name">
                    {props.user.name}
                </div>
            </div>
    )
}

function Comment(props) {
    console.log(props);
    
    return (
      <div className="Comment">

        <UserInfo user={props.author} />

        <div className="Comment-text">
            {props.text}
        </div>

        <div className="Comment-date">
             {props.date}
        </div>

      </div>
    );
}


export default Comment;