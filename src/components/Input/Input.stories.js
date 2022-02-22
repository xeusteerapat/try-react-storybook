import React from "react";
import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
};

export const SmallInput = () => (
  <Input size='small' placeholder='small input' />
);
export const MediumInput = () => (
  <Input size='medium' placeholder='medium input' />
);
export const LargeInput = () => (
  <Input size='large' placeholder='large input' />
);
