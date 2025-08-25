import React, { useState } from "react";

const UserCard = ({ user }) => {
  const [showEmail, setShowEmail] = useState(false);
  const buttonHandler = () => {
    setShowEmail((prev) => !prev);
  };
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <img
        src={user?.picture?.large}
        alt={user?.name?.first}
        style={{ borderRadius: "50%" }}
      />
      <h2>
        {user?.name?.first} {user?.name?.last}
      </h2>
      <p>
        Age: {user?.dob?.age} ({user?.dob?.age >= 18 ? "Adult" : "Minor"})
      </p>
      <p>
        Location: {user?.location?.city}, {user?.location?.country}
      </p>
      {showEmail === true ? <p>{user?.email}</p> : <p></p>}
      <button onClick={buttonHandler}>
        {showEmail ? "Hide Email" : "Show Email"}
      </button>
    </div>
  );
};

export default UserCard;
