import React from "react";
import DialogComponent from "../ui/dialog.component";
import ButtonComponent from "../ui/button.component";
import useCountdown from "../custom-hooks/use-countdown.hook";
import travelConstants from "../constants/travel.constants";
import useGlobalStore from "../store/hooks/use-global-store.hook";
import useTravelStore from "../store/hooks/use-travel-store.hook";
import useToastrStore from "../store/hooks/use-toastr-store.hook";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import usePlayerHungerStore from "../store/hooks/use-player-hunger-store.hook";
import useMessageStore from "../store/hooks/use-message-store.hook";

type Props = {
  onClose: () => void;
};
const Travel: React.FC<Props> = ({ onClose }) => {
  const { decreaseHungerValue, playerHungerValue } = usePlayerHungerStore();
  const { currentLocation, destination, setCurrentLocation, setDestination } = useTravelStore();
  const [selectedLocation, setSelectedLocation] = React.useState<CityLocations>(currentLocation);
  const { setIsBusy, setSkillActionType } = useGlobalStore();
  const { count, isActive, startCountdown } = useCountdown(travelConstants.travelTime);
  const { addToastrMessage } = useToastrStore();
  const { addMessage } = useMessageStore();

  const handleTravel = React.useCallback(
    (location: CityLocations) => {
      if (currentLocation === location) {
        addToastrMessage({
          type: "info",
          text: "You are already here",
        });
        return;
      }
      if (playerHungerValue > 0.25) {
        decreaseHungerValue(0.25);
        setSelectedLocation(location);
        setIsBusy(true);
        startCountdown();
        setDestination(selectedLocation);
      } else {
        addToastrMessage({
          type: "error",
          text: "You are too hungry to travel",
        });
      }
    },
    [currentLocation, decreaseHungerValue, playerHungerValue, selectedLocation, setIsBusy, startCountdown, setDestination, addToastrMessage]
  );

  React.useEffect(() => {
    if (count === 0 && isActive) {
      setIsBusy(false);
      setCurrentLocation(selectedLocation);
      setDestination(undefined);
      setSkillActionType(undefined);
      addMessage({
        text: `Arrived to ${travelConstants.travelLocations[selectedLocation]}`,
        type: "info",
      });
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, isActive, selectedLocation]);

  return (
    <DialogComponent onClose={onClose} title="Travel" className="travel" showGold showHunger>
      <>
        <ul className="flex flex-col gap-3 w-80 items-center">
          <li className="text-xs flex flex-col gap-1 items-center">
            <span> You are in {travelConstants.travelLocations[currentLocation]}</span>
            <span>
              You will arrive at your destination in <span className="text-orange-400 text-sm">{count}</span> seconds.
            </span>
          </li>
          {destination && (
            <li className="flex gap-2 items-center">
              <span>{travelConstants.travelLocations[currentLocation]}</span>
              <ArrowRightIcon className="w-3 h-3 inline-block" />
              <span>{travelConstants.travelLocations[selectedLocation!]}.</span>
            </li>
          )}
          <li>
            <ButtonComponent disabled={currentLocation === "cityCenter"} className="w-72" onClick={() => handleTravel("cityCenter")}>
              <span>City Center (0.25 hunger)</span>
            </ButtonComponent>
          </li>
          <li>
            <ButtonComponent disabled={currentLocation === "marketPlace"} className="w-72" onClick={() => handleTravel("marketPlace")}>
              <span>Market Place (0.25 hunger)</span>
            </ButtonComponent>
          </li>
          <li>
            <ButtonComponent disabled={currentLocation === "carpenter"} className="w-72" onClick={() => handleTravel("carpenter")}>
              <span>Carpenter's Workshop (0.25 hunger)</span>
            </ButtonComponent>
          </li>
          <li>
            <ButtonComponent disabled={currentLocation === "blackSmithWorkshop"} className="w-72" onClick={() => handleTravel("blackSmithWorkshop")}>
              <span>Blacksmith Workshop (0.25 hunger)</span>
            </ButtonComponent>
          </li>
          <li>
            <ButtonComponent disabled={currentLocation === "soupKitchen"} className="w-72" onClick={() => handleTravel("soupKitchen")}>
              <span>Soup Kitchen (0.25 hunger)</span>
            </ButtonComponent>
          </li>
          <li>
            <ButtonComponent disabled={currentLocation === "port"} className="w-72" onClick={() => handleTravel("port")}>
              <span>Port (0.25 hunger)</span>
            </ButtonComponent>
          </li>
          <li>
            <ButtonComponent disabled={currentLocation === "forest"} className="w-72" onClick={() => handleTravel("forest")}>
              <span>Forest (0.25 hunger)</span>
            </ButtonComponent>
          </li>
          <li>
            <ButtonComponent disabled={currentLocation === "mines"} className="w-72" onClick={() => handleTravel("mines")}>
              <span>Mines (0.25 hunger)</span>
            </ButtonComponent>
          </li>
        </ul>
      </>
    </DialogComponent>
  );
};

export default React.memo(Travel);
