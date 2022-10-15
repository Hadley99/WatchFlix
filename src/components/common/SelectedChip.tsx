import * as React from "react";
import { Chip } from "../../interfaces";

const SelectedChip = ({ name }: Chip) => {
  return <div>{name}</div>;
};

export default SelectedChip;
