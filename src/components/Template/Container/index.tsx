import React from "react";
import { Props } from "./types";

const Container = ({ children }: Props) => {
  return <div className="pt-20 p-10">{children}</div>;
};

export default Container;
