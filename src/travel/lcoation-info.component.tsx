import React from "react";
import useTravelStore from "../store/hooks/use-travel-store.hook";
import travelConstants from "../constants/travel.constants";
import { MapIcon } from "@heroicons/react/24/outline";

const LocationInfo = () => {
  const { currentLocation } = useTravelStore();
  return (
    <div className="flex gap-1 items-center">
      <MapIcon className="w-5 h-5" />
      You are in <span className="font-bold">{travelConstants.travelLocations[currentLocation]}</span>.
    </div>
  );
};

export default React.memo(LocationInfo);
