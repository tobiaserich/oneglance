import React from "react";
import { text, select } from "@storybook/addon-knobs";
import DetailInformation, { PollDetailContainer } from "../../components/DetailInformation";
import UserDetailImg from "../../components/UserDetailImg";

export default {
  title: "Main Page|Poll Site"
};

export function userDone() {
  return (
    <DetailInformation item={1} title="Alkoholic drinks?">
      <PollDetailContainer>
        <span>User done:</span>{" "}
        <span>
          {text("done:", "10")}/ {text("Total user:", "20")}
        </span>
      </PollDetailContainer>
    </DetailInformation>
  );
}

const status = {
  blank: "blank",
  finished: "finished"
};

export function userDetail() {
  return <UserDetailImg status={select("status", status, "finished")} />;
}
