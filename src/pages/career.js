import React from "react";
import DefautLayout from "../layouts/default";
import * as CareerPage from "../components/screens/career";
import "../assets/sass/index.scss";

export default function Team() {
  return (
    <DefautLayout title="Karriere">
      <div id="career">
        <CareerPage.Header />
        <CareerPage.Hero />
        <CareerPage.Offers />
        <CareerPage.Benefits />
        <CareerPage.Now />
        <CareerPage.Apply />
        <CareerPage.Testimonials />
        <CareerPage.Contact />
      </div>
    </DefautLayout>
  )
}