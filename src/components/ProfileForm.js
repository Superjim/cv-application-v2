import { useState } from "react";

export default function ProfileForm({ addProfile }) {
  const [profileInfo, setProfileInfo] = useState({
    name: "",
    location: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProfile(profileInfo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="name">Full Name:</label>
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={profileInfo.name}
            onChange={handleChange}
          />
          <br></br>
          <label htmlFor="location">Location:</label>
          <input
            name="location"
            type="text"
            placeholder="Location"
            value={profileInfo.location}
            onChange={handleChange}
          />
          <br></br>
          <label htmlFor="email">Email Address:</label>
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={profileInfo.email}
            onChange={handleChange}
          />
          <br></br>
          <label htmlFor="phone">Phone Number:</label>
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={profileInfo.phone}
            onChange={handleChange}
          />
          <br></br>
          <button type="submit">Submit Profile</button>
        </div>
      </form>
    </div>
  );
}
