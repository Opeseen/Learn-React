import React, {useState} from 'react';
import './App.css'
import Header from './Header';
import {AddContact} from './AddContact';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts] = useState([])

  const contactHandler = (input) => {
    setContacts([...contacts, input]);
  };
  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={contactHandler}/>
      <ContactList contact={contacts} />
    </div>
  );
}

export default App;
