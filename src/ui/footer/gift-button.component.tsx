import React from "react";
import ButtonComponent from "../button.component";
import { GiftIcon } from "@heroicons/react/24/outline";
import GiftComponent from "../../gift-system/gift.component";
import useGiftStore from "../../store/hooks/use-gift-store.hook";

type Props = {
  handleShow: (type: DialogTypes) => void;
  handleClose: () => void;
  isShow: boolean;
};

const GiftButton: React.FC<Props> = ({ handleShow, isShow, handleClose }) => {
  const { rewardCount } = useGiftStore();
  return (
    <>
      <ButtonComponent className={`${rewardCount > 0 ? "bg-yellow-500 text-black border-yellow-500" : ""} relative`} onClick={() => handleShow("gift")}>
        {rewardCount > 0 && <span className="text-[10px] absolute -top-1.5 -right-1.5 bg-orange-500 text-black rounded-full px-1">{rewardCount}</span>}
        <GiftIcon className="w-5 h-5" />
      </ButtonComponent>
      {isShow && <GiftComponent onClose={handleClose} />}
    </>
  );
};

export default React.memo(GiftButton);
