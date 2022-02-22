import React from "react";
import { Primary } from "../Button/Button.stories";
import { LargeInput } from "../Input/Input.stories";

export default {
  title: "Form/Subscrition",
};

export const PrimarySubscription = () => {
  return (
    <>
      <LargeInput />
      <Primary />
    </>
  );
};
