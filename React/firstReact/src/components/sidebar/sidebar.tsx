import React from "react";

import "./sidebar.css";
import { IonButton } from "@ionic/react";
import AccIcon from "../../svg/Acc.svg";

function Sidebar() {
  return (
    <>
      <div className="sideBar">
        <div className="sideBarHeader">
          <div className="sideBarProfilePicture">
            <img src={AccIcon} alt="Profile" />
          </div>
          <div className="sideBarUserName">UserName</div>
        </div>
        <div className="sideBarBody">
          <IonButton>Default</IonButton>
          <IonButton color="primary">PlaceHolder</IonButton>
          <IonButton color="secondary">PlaceHolder</IonButton>
          <IonButton color="success">PlaceHolder</IonButton>
          <IonButton color="danger">PlaceHolder</IonButton>
          <IonButton color="medium">Settings</IonButton>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
