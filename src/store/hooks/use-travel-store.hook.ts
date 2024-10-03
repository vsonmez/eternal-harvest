import AppStore from "..";
import TravelStore from "../slices/travel-store.slice";

const useTravelStore = () => {
  const dispatch = AppStore.useAppDispatch();
  const currentLocation = AppStore.useAppSelector(TravelStore.select.currentLocation);
  const currentCity = AppStore.useAppSelector(TravelStore.select.currentCity);
  const destination = AppStore.useAppSelector(TravelStore.select.destination);

  const setCurrentLocation = (location: CityLocations) => {
    dispatch(TravelStore.actions.setCurrentLocation(location));
  };

  const setCurrentCity = (city: string) => {
    dispatch(TravelStore.actions.setCurrentCity(city));
  };

  const setDestination = (location: CityLocations | undefined) => {
    dispatch(TravelStore.actions.setDestination(location));
  };

  return {
    currentLocation,
    currentCity,
    destination,
    setCurrentLocation,
    setCurrentCity,
    setDestination,
  };
};

export default useTravelStore;
