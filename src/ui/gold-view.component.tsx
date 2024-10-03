import React from "react";
import FixedNumberComponent from "./fixed-number.component";

type Props = {
  goldAmount: number;
};
const GoldView: React.FC<Props> = ({ goldAmount: gold }) => {
  return <FixedNumberComponent number={gold} />;
};

export default React.memo(GoldView);
