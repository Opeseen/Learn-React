import React from "react";

const ContactCard = (props) => {
  // This function get the information from the ContactList handler
  const {cid, name, email} = props.con;
  return(
    <div className="item">
    <div className="content">
      <div className="header">{name}</div>
      <div>{email}</div>
        <div>
         <i className="trash alternate outline icon" style={{color:"red", marginTop:"7px"}}
         onClick={() => props.clickHandler(cid)}
         ></i> 
        </div>
    </div>
  </div>
  )
};

export default ContactCard;