import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const renderContactList = props.contact.map((cont) =>{
    return(
      <ContactCard con={cont} />
    )
  });
  return <div className="ui celled list">
    {renderContactList}
  </div>

};

export default ContactList;