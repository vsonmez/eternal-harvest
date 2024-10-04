import React from "react";
import DialogComponent from "../ui/dialog.component";
import ButtonComponent from "../ui/button.component";
import useGlobalStore from "../store/hooks/use-global-store.hook";
import useTravelStore from "../store/hooks/use-travel-store.hook";
import useToastrStore from "../store/hooks/use-toastr-store.hook";
import travelConstants from "../constants/travel.constants";

type Props = {
  onClose: () => void;
};

const SkillActionSelect: React.FC<Props> = ({ onClose }) => {
  const { setSkillActionType } = useGlobalStore();
  const { currentLocation } = useTravelStore();
  const { addToastrMessage } = useToastrStore();

  const handleSkillAction = React.useCallback(
    (skillActionype: SkillActionTypes) => {
      switch (skillActionype) {
        case "woodcutting":
          if (currentLocation === "forest") {
            break;
          } else {
            addToastrMessage({
              type: "error",
              text: `You can only use woodcutting in the ${travelConstants.travelLocations.forest}`,
            });
            return;
          }

        case "begging":
          if (currentLocation === "cityCenter" || currentLocation === "marketPlace") {
            break;
          } else {
            addToastrMessage({
              type: "error",
              text: `You can only use begging in the ${travelConstants.travelLocations.cityCenter} or ${travelConstants.travelLocations.marketPlace}`,
            });
            return;
          }

        case "fishing":
          if (currentLocation === "port") {
            break;
          } else {
            addToastrMessage({
              type: "error",
              text: `You can only use fishing in the ${travelConstants.travelLocations.port}`,
            });
            return;
          }
        default:
          break;
      }
      setSkillActionType(skillActionype);
      onClose();
    },
    [currentLocation, onClose, setSkillActionType, addToastrMessage]
  );
  return (
    <DialogComponent onClose={onClose} title="Action List" className="skillAction">
      <ul className="flex flex-col gap-3">
        <li>
          <ButtonComponent onClick={() => handleSkillAction("begging")}>
            <img src="./images/begging.jpeg" alt="" className="w-32" />
            <span>Begging</span>
          </ButtonComponent>
        </li>
        <li>
          <ButtonComponent onClick={() => handleSkillAction("woodcutting")}>
            <img src="./images/woodcutter.jpeg" alt="" className="w-32" />
            <span>Woodcutting</span>
          </ButtonComponent>
        </li>
        <li>
          <ButtonComponent className="flex flex-col items-center" onClick={() => handleSkillAction("fishing")}>
            <img src="./images/fishing.jpeg" alt="" className="w-32" />
            <span>Fishing</span>
          </ButtonComponent>
        </li>
        <li>
          <ButtonComponent className="flex flex-col items-center" onClick={() => handleSkillAction("cooking")} disabled>
            <img src="./images/cooking.jpeg" alt="" className="w-32" />
            <span>Cooking</span>
            <span>Coming soon</span>
          </ButtonComponent>
        </li>
        <li>
          <ButtonComponent className="flex flex-col items-center" onClick={() => {}} disabled>
            <img src="./images/carpenter.jpeg" alt="" className="w-32" />
            <span>Carpentry</span>
            <span>Coming soon</span>
            <span className="text-xs block text-rose-300">Need 10 Woodcutting</span>
          </ButtonComponent>
        </li>
        <li>
          <ButtonComponent className="flex flex-col items-center" onClick={() => {}} disabled>
            <img src="./images/mine.jpeg" alt="" className="w-32" />
            <span>Mining</span>
            <span>Coming soon</span>
          </ButtonComponent>
        </li>
        <li>
          <ButtonComponent className="flex flex-col items-center" onClick={() => {}} disabled>
            <img src="./images/robbery.jpeg" alt="" className="w-32" />
            <span>Robbery</span>
            <span>Coming soon</span>
            <span className="text-xs text-rose-300">Need 10 Deception</span>
          </ButtonComponent>
        </li>
      </ul>
    </DialogComponent>
  );
};

export default React.memo(SkillActionSelect);
