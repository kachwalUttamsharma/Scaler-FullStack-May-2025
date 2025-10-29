import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="App-header">
      <div className="profile-card text-center">
        <img
          src={
            user.image ||
            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          }
          alt="profileImage"
          className="profile-pic d-block mx-auto"
        />
        <h2 className="profile-name">{user?.name}</h2>
        <p className="profile-email">{user?.email}</p>
        <span className="profile-role">{user.role.toUpperCase()}</span>
        <p className="profile-id mt-3">User ID: {user._id}</p>
      </div>
    </div>
  );
};

export default Profile;
