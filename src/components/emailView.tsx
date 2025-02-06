import React from 'react';

function EmailView(props)
{

    return (
        <>
        <article>
            <button onClick={props.goBack}>Close email </button>
            <h2>  { props.openEmail.title}</h2>
            <h4> sender: {props.openEmail.sender}</h4>
        </article>
        
        </>

    )
}
export default EmailView;