import React from "react";

const ContactCard = (props) => {
  const {name, email} = props.con;
  return(
    <div className="item">
    <div className="content">
      <div className="header">{name}</div>
      <div>{email}</div>
        <div>
         <i className="trash alternate outline icon" style={{color:"red", marginTop:"7px"}}></i> 
        </div>
    </div>
  </div>
  )
};

export default ContactCard;