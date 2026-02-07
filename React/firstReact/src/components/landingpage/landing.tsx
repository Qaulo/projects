import React from "react";
import Sidebar from "../sidebar/sidebar";
import { IonHeader, IonContent } from "@ionic/react";

function Landing() {
  return (
    <>
      <Sidebar></Sidebar>
      <IonHeader></IonHeader>
      <IonContent>Super Cooler content</IonContent>
    </>
  );
}

export default Landing;
