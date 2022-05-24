import React, { useState } from "react";

function Profile() {
  const [name, setName] = useState("Firstname Lastname");
  const [location, setLocation] = useState("Location");
  const [email, setEmail] = useState("random@mail.com");
  const [phone, setPhone] = useState("07835186666");

  return (
    <div className="card">
      <div className="name">{name}</div>
      <div className="location">{location}</div>
      <div className="email">{email}</div>
      <div className="phone">{phone}</div>
    </div>
  );
}

export default Profile;
