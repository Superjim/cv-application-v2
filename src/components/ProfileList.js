import React from "react";
import Card from "./shared/Card";

export default function ProfileList({ profile }) {
  return (
    <Card>
      {profile.map((profile) => (
        <div className="card" key={profile.phone}>
          <p>{profile.name}</p>
          <p>{profile.location}</p>
          <p>{profile.email}</p>
          <p>{profile.phone}</p>
        </div>
      ))}
    </Card>
  );
}
