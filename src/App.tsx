import { useState } from 'react'
import React from "react";
import initialEmails from './data/emails'
import EmailList from './components/emails'
import './styles/App.css'
import Header from './components/header'
import Navbar from './components/navbar'
import EmailView from './components/emailView';

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [openEmail, setOpenEmail] = useState(null);

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)
  

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">
      <Header></Header>
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} unreadEmails={unreadEmails} starredEmails={starredEmails} setHideRead={setHideRead}  />
      {openEmail ==null ?( 
                  <EmailList filteredEmails={filteredEmails} setEmails= {setEmails} setOpenEmail={setOpenEmail}/>
      ): (

        <EmailView openEmail={openEmail} goBack={() =>setOpenEmail(null)} ></EmailView>
      )}
 

    </div>
  )
}

export default App
