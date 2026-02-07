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
          <IonButton>PlaceHolder</IonButton>
          <IonButton>PlaceHolder</IonButton>
          <IonButton>PlaceHolder</IonButton>
          <IonButton>PlaceHolder</IonButton>
          <IonButton>Settings</IonButton>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
