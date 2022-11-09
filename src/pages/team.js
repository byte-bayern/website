import React from "react";
import DefautLayout from "../layouts/default";
import * as TeamPage from "../components/screens/team";
import "../assets/sass/index.scss";

export default function Team() {
  return (
    <DefautLayout title="Team">
      <div id="team">
        <TeamPage.Header />
        <TeamPage.Mission /> 
        <TeamPage.Hero />
        <TeamPage.What />
        <TeamPage.Why />
        <TeamPage.Digitalschmiede />
        <TeamPage.BlueHero />
        <TeamPage.Insights />
        <TeamPage.QuoteMD />
        <TeamPage.LocalHeaderTeam />
        <TeamPage.Team />
        <TeamPage.OpenPositions />
      </div>
    </DefautLayout>
  );
}