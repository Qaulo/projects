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
          <IonButton color="primary">Primary</IonButton>
          <IonButton color="secondary">Secondary</IonButton>
          <IonButton color="tertiary">Tertiary</IonButton>
          <IonButton color="success">Success</IonButton>
          <IonButton color="warning">Warning</IonButton>
          <IonButton color="danger">Danger</IonButton>
          <IonButton color="light">Light</IonButton>
          <IonButton color="medium">Medium</IonButton>
          <IonButton color="dark">Dark</IonButton>{" "}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
