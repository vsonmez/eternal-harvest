import React from "react";
import DialogComponent from "../ui/dialog.component";
import HandEquipmentComponent from "./hand-equipment.component";
import HandLeftEquipmentComponent from "./hand-left-equipment.component";
import HeadEquipmentComponent from "./head-equipment.component";
import LegsEquipmentComponent from "./legs-equipment.component";
import FeetEquipmentComponent from "./feet-equipment.component";
import BodyEquipmentComponent from "./body-equipment.component";
import useGlobalStore from "../store/hooks/use-global-store.hook";
import Translation from "../language/transltion";

type Props = {
  onClose: () => void;
};

const Equipment: React.FC<Props> = ({ onClose }) => {
  const {
    getGlobal: { language },
  } = useGlobalStore();
  return (
    <DialogComponent onClose={onClose} title={Translation.translate[language].equipment} className="equipment">
      <ul className="flex flex-col items-center gap-2 w-80">
        <li className="w-[100px]">
          <HeadEquipmentComponent />
        </li>
        <li className="flex gap-2 items-center">
          <div className="w-[100px]">
            <HandEquipmentComponent />
          </div>
          <div className="w-[100px]">
            <BodyEquipmentComponent />
          </div>
          <div className="w-[100px]">
            <HandLeftEquipmentComponent />
          </div>
        </li>
        <li className="w-[100px]">
          <LegsEquipmentComponent />
        </li>
        <li className="w-[100px]">
          <FeetEquipmentComponent />
        </li>
      </ul>
    </DialogComponent>
  );
};

export default React.memo(Equipment);
