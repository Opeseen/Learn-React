import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (prop) => {
  const renderContactList = prop.contact.map((cont, index) =>{
    return(
      <ContactCard key={index} con={cont} />
    )
  });
  return <div className="ui celled list">
    {renderContactList}
  </div>

};

export default ContactList;