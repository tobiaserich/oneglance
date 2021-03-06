import React from "react";
import { text, select } from "@storybook/addon-knobs";
import ProfileNavigation from "../../components/ProfileNavigation";
import PersonalInformation from "../../components/PersonalInformation";
import DetailCard from "../../components/DetailCard";
import PollInfo from "../../components/PollInfo";
import { InfoNav } from "../../components/ProfileNavigation";

import DetailInformation from "../../components/DetailInformation";

export default {
  title: "Main Page|Profile Navigation"
};

export function profileNavigation() {
  return <ProfileNavigation />;
}

export function personalInformation() {
  const gender = { male: "male", female: "female", divers: "divers", Airplane: "Airplane" };
  const address = {
    street: text("Street", "Mustermannstr."),
    houseNumber: text("number:", "11"),
    zip: text("zip", "98989"),
    city: text("City:", "Stuttgart")
  };
  return (
    <DetailCard>
      <PersonalInformation
        name={text("Name:", "Max MusterMann")}
        birthday={text("B-Day:", "11.11.1989")}
        gender={select("Gender:", gender, "male")}
        address={address}
      />
    </DetailCard>
  );
}

export function pollInformation() {
  const status = {
    blank: "blank",
    finished: "finished"
  };
  return (
    <DetailCard>
      <InfoNav>
        <PollInfo status={select("status:", status, "blank")} />
      </InfoNav>
    </DetailCard>
  );
}

export function taskInformation() {
  return (
    <>
      <DetailInformation item={1} title="Driving with Hannes">
        {text("Text field 1:", "")}
      </DetailInformation>
      <DetailInformation item={2} title="Alkohol?">
        {text("text field 2:", "Whiskey")}
      </DetailInformation>
    </>
  );
}
