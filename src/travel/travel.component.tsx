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
import Translation from "../language/transltion";

type Props = {
  onClose: () => void;
};
const Travel: React.FC<Props> = ({ onClose }) => {
  const { decreaseHungerValue, playerHungerValue } = usePlayerHungerStore();
  const { currentLocation, destination, setCurrentLocation, setDestination } = useTravelStore();
  const [selectedLocation, setSelectedLocation] = React.useState<CityLocations>(currentLocation);
  const {
    setIsBusy,
    setSkillActionType,
    getGlobal: { language },
  } = useGlobalStore();
  const { count, isActive, startCountdown } = useCountdown(travelConstants.travelTime);
  const { addToastrMessage } = useToastrStore();
  const { addMessage } = useMessageStore();

  const handleTravel = React.useCallback(
    (location: CityLocations) => {
      if (currentLocation === location) {
        addToastrMessage({
          type: "info",
          text: Translation.translate[language].alreadyHere,
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
          text: Translation.translate[language].tooHungryToTravel,
        });
      }
    },
    [currentLocation, decreaseHungerValue, playerHungerValue, selectedLocation, setIsBusy, startCountdown, setDestination, addToastrMessage, language]
  );

  React.useEffect(() => {
    if (count === 0 && isActive) {
      setIsBusy(false);
      setCurrentLocation(selectedLocation);
      setDestination(undefined);
      setSkillActionType(undefined);
      addMessage({
        text: Translation.translateFunctions[language].arrivedAt(Translation.locationsTranslations[language][selectedLocation]),
        type: "info",
      });
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, isActive, selectedLocation]);

  return (
    <DialogComponent onClose={onClose} title={Translation.translate[language].travel} className="travel" showGold showHunger>
      <>
        <ul className="flex flex-col gap-3 w-80 items-center">
          <li className="text-xs flex flex-col gap-1 items-center">
            <span>{Translation.translateFunctions[language].youAreIn(travelConstants.travelLocations[currentLocation])}</span>
            {isActive && <span className="text-base bg-yellow-500 text-black px-2">{Translation.translateFunctions[language].youWillArriveIn(count)}</span>}
          </li>
          {destination && (
            <li className="flex gap-2 items-center">
              <span>{Translation.locationsTranslations[language][currentLocation]}</span>
              <ArrowRightIcon className="w-3 h-3 inline-block" />
              <span>{Translation.locationsTranslations[language][selectedLocation]}</span>
            </li>
          )}
          <li>
            <ButtonComponent disabled={currentLocation === "cityCenter"} className="w-72" onClick={() => handleTravel("cityCenter")}>
              <span>
                {Translation.locationsTranslations[language].cityCenter} (0.25 {Translation.translate[language].hunger})
              </span>
            </ButtonComponent>
          </li>
          <li>
            <ButtonComponent disabled={currentLocation === "marketPlace"} className="w-72" onClick={() => handleTravel("marketPlace")}>
              <span>
                {Translation.locationsTranslations[language].marketPlace} (0.25 {Translation.translate[language].hunger})
              </span>
            </ButtonComponent>
          </li>
          <li>
            <ButtonComponent disabled={currentLocation === "carpenter"} className="w-72" onClick={() => handleTravel("carpenter")}>
              <span>
                {Translation.locationsTranslations[language].carpenter} (0.25 {Translation.translate[language].hunger})
              </span>
            </ButtonComponent>
          </li>
          <li>
            <ButtonComponent disabled={currentLocation === "blackSmithWorkshop"} className="w-72" onClick={() => handleTravel("blackSmithWorkshop")}>
              <span>
                {Translation.locationsTranslations[language].blackSmithWorkshop} (0.25 {Translation.translate[language].hunger})
              </span>
            </ButtonComponent>
          </li>
          <li>
            <ButtonComponent disabled={currentLocation === "soupKitchen"} className="w-72" onClick={() => handleTravel("soupKitchen")}>
              <span>
                {Translation.locationsTranslations[language].soupKitchen} (0.25 {Translation.translate[language].hunger})
              </span>
            </ButtonComponent>
          </li>
          <li>
            <ButtonComponent disabled={currentLocation === "port"} className="w-72" onClick={() => handleTravel("port")}>
              <span>
                {Translation.locationsTranslations[language].port} (0.25 {Translation.translate[language].hunger})
              </span>
            </ButtonComponent>
          </li>
          <li>
            <ButtonComponent disabled={currentLocation === "forest"} className="w-72" onClick={() => handleTravel("forest")}>
              <span>
                {Translation.locationsTranslations[language].forest} (0.25 {Translation.translate[language].hunger})
              </span>
            </ButtonComponent>
          </li>
          <li>
            <ButtonComponent disabled={currentLocation === "mines"} className="w-72" onClick={() => handleTravel("mines")}>
              <span>
                {Translation.locationsTranslations[language].mines} (0.25 {Translation.translate[language].hunger})
              </span>
            </ButtonComponent>
          </li>
        </ul>
      </>
    </DialogComponent>
  );
};

export default React.memo(Travel);
