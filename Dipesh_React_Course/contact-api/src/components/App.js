import './App.css'
import React from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const contacts = [
    {
      id: 1,
      name: 'Opeyemi',
      email: "Opeyemi3035@yahoo.com"
    },
    {
      id: 2,
      name: 'Mike',
      email: "Mike3035@gmail.com"
    }
  ]
  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contact ={contacts} />
    </div>
  );
}

export default App;
