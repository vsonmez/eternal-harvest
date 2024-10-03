import React from "react";
import useGlobalStore from "../store/hooks/use-global-store.hook";

type Props = {
  onClick: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  ignoreIsBusy?: boolean;
  className?: string;
};

const Button: React.FC<Props> = ({ onClick, disabled, children, ignoreIsBusy, className }) => {
  const {
    getGlobal: { isBusy },
  } = useGlobalStore();
  return (
    <button className={`border py-1 px-2 ${disabled || (!ignoreIsBusy && isBusy) ? "opacity-50" : "opacity-100"} ${className}`} onClick={onClick} disabled={disabled || (!ignoreIsBusy && isBusy)}>
      {children}
    </button>
  );
};

export default React.memo(Button);
