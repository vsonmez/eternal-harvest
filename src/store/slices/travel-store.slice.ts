import { createSlice } from "@reduxjs/toolkit";
import AppStore from "..";

namespace TravelStore {
  type TravelState = {
    currentCity: string;
    currentLocation: CityLocations;
    destination: CityLocations | undefined;
  };

  const initialState: TravelState = {
    currentCity: "city",
    currentLocation: "cityCenter",
    destination: undefined,
  };

  const travelSlice = createSlice({
    name: "travel",
    initialState,
    reducers: {
      setCurrentCity: (state, action) => {
        state.currentCity = action.payload;
      },
      setCurrentLocation: (state, action) => {
        state.currentLocation = action.payload;
      },
      setDestination: (state, action) => {
        state.destination = action.payload;
      },
    },
  });

  export const actions = travelSlice.actions;
  export const reducers = travelSlice.reducer;

  export const select = {
    currentCity: (state: AppStore.RootState) => state.persistedReducers.travel.currentCity,
    currentLocation: (state: AppStore.RootState) => state.persistedReducers.travel.currentLocation,
    destination: (state: AppStore.RootState) => state.persistedReducers.travel.destination,
  };
}

export default TravelStore;
