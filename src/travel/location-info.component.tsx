import React from "react";
import useTravelStore from "../store/hooks/use-travel-store.hook";
import { MapIcon } from "@heroicons/react/24/outline";
import Translation from "../language/transltion";
import useGlobalStore from "../store/hooks/use-global-store.hook";

const LocationInfo = () => {
  const {
    getGlobal: { language },
  } = useGlobalStore();
  const { currentLocation } = useTravelStore();
  return (
    <div className="flex gap-1 items-center">
      <MapIcon className="w-5 h-5" />
      <span className="font-bold">{Translation.locationsTranslations[language][currentLocation]}</span>
    </div>
  );
};

export default React.memo(LocationInfo);
