import React from "react";
import ChangeInfo from "./ChangeInfo";
import ChangePassword from "./ChangePassword";
import ChangePhoto from "./ChangePhoto";
import { useSelector } from "react-redux";
import "./Profile.css";

function Profile() {
  const user = useSelector((state) => state.user);

  return (
    <div className="profileBox">
      <div className="profile">
        {user ? (
          <div className="profileBox">
            <ChangePhoto />
            <div className="infoBox">
              <ChangeInfo />
              <ChangePassword />
            </div>
          </div>
        ) : (
          <>Вы не зарегистрированны!</>
        )}
      </div>
    </div>
  );
}

export default Profile;
