import React from "react";
import { InfoNav, InfoEntry } from "../../components/ProfileNavigation";

export default {
  title: "Main Page| Task site"
};

export function TaskOverview() {
  return (
    <InfoNav>
      <InfoEntry item={1}>Driving with Hannes</InfoEntry>
      <InfoEntry item={2}>Who brings Alkohol?</InfoEntry>
      <InfoEntry item={3}>Another Tasklist</InfoEntry>
    </InfoNav>
  );
}
