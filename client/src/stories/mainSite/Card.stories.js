import React from "react";
import Card from "../../components/Card";
import { text, select } from "@storybook/addon-knobs";
export default {
  title: "Main Page| Card"
};

export function card() {
  const eventDatas = {
    title: text("EventName:", "EventName"),
    date: text("Date:", "12.12.12"),
    description: text(
      "description:",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, eos!Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, eos!"
    )
  };
  const menueSelect = { ON: true, OFF: false };
  return (
    <Card
      imgsrc={text(
        "ImgSrc:",
        "http://ellomedia.de/galleries/AmoreMioParty/AMLindenbrauerei181014/IMG_9075141018B.jpg"
      )}
      eventDatas={eventDatas}
      menueOn={select("MenueOn?", menueSelect, true)}
    />
  );
}
