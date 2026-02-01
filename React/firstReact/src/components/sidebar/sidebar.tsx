import React from "react";

import "./sidebar.css";
import { IonButton } from "@ionic/react";
function Sidebar() {
  return (
    <>
      <div className="sideBar">
        <div className="sideBarHeader">sideBarHeader</div>
        <div className="sideBarBody">
          <IonButton color="danger">Btn color danger</IonButton>
          <IonButton color="dark">Btn color dark</IonButton>
          <IonButton color="light">Btn color light</IonButton>
          <IonButton color="medium">Btn color medium</IonButton>
          <IonButton color="primary">Btn color primary</IonButton>
          <IonButton color="secondary">Btn color secondary</IonButton>
          <IonButton color="success">Btn color success</IonButton>
          <IonButton color="tertiary">Btn color tertiary</IonButton>
          <IonButton color="warning">Btn color warning</IonButton>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
