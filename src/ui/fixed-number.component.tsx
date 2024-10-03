import React from "react";

type Props = {
  number: number;
  fractionDigits?: number;
};
const fixedNumber: React.FC<Props> = ({ number, fractionDigits = 2 }) => {
  return <>{number.toFixed(fractionDigits)}</>;
};

export default React.memo(fixedNumber);
