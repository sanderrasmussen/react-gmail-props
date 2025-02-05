import React from "react";
import EmailItem from "./email";

function EmailList(props){
    const toggleStar = targetEmail => {
        const updatedEmails = emails =>
          emails.map(email =>
            email.id === targetEmail.id
              ? { ...email, starred: !email.starred }
              : email
          )
        props.setEmails(updatedEmails)
      }
    
      const toggleRead = targetEmail => {
        const updatedEmails = emails =>
          emails.map(email =>
            email.id === targetEmail.id ? { ...email, read: !email.read } : email
          )
        props.setEmails(updatedEmails)
      }

    const filteredEmails = props.filteredEmails;
    let setEmails = props.setEmails;


    return (
        <main className="emails">
            <ul>
            {filteredEmails.map((email, index) => (
               //email component here
               <EmailItem key={index} setEmails={setEmails} email={email} toggleRead={toggleRead} toggleStar={toggleStar} setOpenEmail={props.setOpenEmail}/>
             ))}
            </ul>
        </main>
    );
}

export default EmailList;