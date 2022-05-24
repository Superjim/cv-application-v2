import React, { useState } from "react";
import Card from "../shared/Card";
import ProfileForm from "../ProfileForm";
import ProfileList from "../ProfileList";

function ProfilePage() {
  const [profile, updateProfile] = useState([]);

  const addProfile = (profileInfo) => {
    updateProfile([...profile, profileInfo]);
  };

  console.log(profile);

  return (
    <Card>
      <div className="profile-page">
        <ProfileForm addProfile={addProfile} />
        <ProfileList profile={profile} />
      </div>
    </Card>
  );
}

export default ProfilePage;
