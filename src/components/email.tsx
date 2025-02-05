import React from "react";

function EmailItem(props){
    let email = props.email ;
    let index = props.index;
    console.log(email);

    return (
        <li
        key={index}
        className={`email ${email.read ? 'read' : 'unread'}`}
        onClick={props.setOpenEmail(email)}
        >
            <div className="select">
                <input
                className="select-checkbox"
                type="checkbox"
                checked={email.read}
                onChange={() => props.toggleRead(email)}
                />
            </div>
            <div className="star">
                <input
                className="star-checkbox"
                type="checkbox"
                checked={email.starred}
                onChange={() => props.toggleStar(email)}
                />
            </div>
            <div className="sender">{email.sender}</div>
            <div className="title">{email.title}</div>
        </li>
    );
}
export default EmailItem;