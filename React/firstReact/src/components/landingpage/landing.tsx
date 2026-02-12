import React from "react";
import Sidebar from "../sidebar/sidebar";
import { IonHeader, IonContent, IonPage } from "@ionic/react";
import "./landing.css";

function Landing() {
  return (
    <>
      <IonPage>
        <IonHeader></IonHeader>
        <IonContent>
          <div className="content">
            <div className="left">
              <Sidebar></Sidebar>
            </div>
            <div className="right">
              <p>Super Cooler Content</p>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
}

export default Landing;
