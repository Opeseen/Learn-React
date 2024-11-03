import React from "react";
import ContactCard from "./ContactCard";

// These function got the contact information from the App.js ContactList
const ContactList = (prop) => {
  const deleteContactHandler = (id) => {
    prop.getContactID(id)
  };
  const renderContactList = prop.contact.map((cont, index) =>{
    return(
      // This function passes the contact information to the ContactCard
      <ContactCard key={cont.cid} con={cont} clickHandler={deleteContactHandler} />
    )
  });
  return <div className="ui celled list">
    {renderContactList}
  </div>

};

export default ContactList;