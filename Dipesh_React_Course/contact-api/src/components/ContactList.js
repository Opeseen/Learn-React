import React from "react";
import CardContact from "./ContactCard";

const ContactList = (props) => {
  const renderContactList = props.contact.map((contact) =>{
    return(
      <CardContact con={contact} />
    )
  });
  return <div className="ui celled list">
    {renderContactList}
  </div>

};

export default ContactList;