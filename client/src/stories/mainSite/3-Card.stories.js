import React from "react";
import Card from "../../components/Card";
import { text, select } from "@storybook/addon-knobs";
import DarkFilter from "../../components/DarkFilter";
import Headline from "../../components/Headline";
import DateOutput from "../../components/DateOutput";
import DescriptionOutput from "../../components/DescriptionOutput";

export default {
  title: "Main Page| Card"
};

export function fullCard() {
  const eventDatas = {
    title: text("EventName:", "EventName"),
    date: text("Date:", "12.12.12"),
    description: text(
      "description:",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, eos!Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, eos!"
    )
  };

  const menuSelect = { ON: true, OFF: false };
  return (
    <Card
      imgsrc={text(
        "ImgSrc:",
        "http://ellomedia.de/galleries/AmoreMioParty/AMLindenbrauerei181014/IMG_9075141018B.jpg"
      )}
      eventDatas={eventDatas}
      menuOn={select("MenuOn?", menuSelect, false)}
    />
  );
}

export function cardContainerAndMenuButton() {
  const emptyEventDatas = {
    title: " ",
    date: " ",
    description: " "
  };
  return <Card imgsrc="" eventDatas={emptyEventDatas} />;
}

export function cardDarkFilter() {
  return <DarkFilter />;
}

export function headline() {
  return <Headline eventName={text("EventName:", "EventName")} />;
}

export function date() {
  return <DateOutput date={text("Date: ", "11.11.2019")} />;
}

export function description() {
  return (
    <DescriptionOutput>
      {text(
        "Description:",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, delectus."
      )}
    </DescriptionOutput>
  );
}
