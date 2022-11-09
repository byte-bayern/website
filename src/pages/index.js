import * as React from "react";
import DefautLayout from "../layouts/default";
import * as Home from "../components/screens/home";
import "../assets/sass/index.scss";

const IndexPage = () => {
  return (
    <DefautLayout title="Startseite">
      <div id="index">
        <Home.Header />
        <Home.Byte />
        <Home.Facts />
        <Home.Hero />
        <Home.TakePart />
      </div>
    </DefautLayout>
  );
};

export default IndexPage;
