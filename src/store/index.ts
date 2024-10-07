import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import PlayerBagStore from "./slices/player-bag.slice";
import GlobalStore from "./slices/global-store.slice";
import PlayerHungerStore from "./slices/player-hunger-store.slice";
import PlayerGoldStore from "./slices/player-gold.slice";
import WoodCutterStore from "./slices/skills/woodcutter-store.slice";
import PlayerEquipmentStore from "./slices/player-equipment.slice";
import MessageStore from "./slices/message-store.slice";
import ToastrStore from "./slices/toastr-store.slice";
import GiftStore from "./slices/gift-store.slice";
import BeggingStore from "./slices/skills/begging-store.slice";
import DeceptionStore from "./slices/skills/deception-store.slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import TravelStore from "./slices/travel-store.slice";
import FishingStore from "./slices/skills/fishing-store.slice";
import CookingStore from "./slices/skills/cooking-store.slice";
import MiningStore from "./slices/skills/mining-store.slice";
import CarpentryStore from "./slices/skills/carpentry-store.slice";
import BlacksmithingStore from "./slices/skills/blacksmithing-store.slice";

namespace AppStore {
  const persistConfig = {
    key: "root",
    storage,
  };

  const persistReducers = combineReducers({
    playerBag: PlayerBagStore.reducers,
    playerHunger: PlayerHungerStore.reducers,
    playerGold: PlayerGoldStore.reducers,
    playerEquipment: PlayerEquipmentStore.reducers,
    woodcutting: WoodCutterStore.reducers,
    begging: BeggingStore.reducers,
    fishing: FishingStore.reducers,
    deception: DeceptionStore.reducers,
    cooking: CookingStore.reducers,
    carpentry: CarpentryStore.reducers,
    mining: MiningStore.reducers,
    blacksmithing: BlacksmithingStore.reducers,
    gift: GiftStore.reducers,
    travel: TravelStore.reducers,
  });
  const persistedReducers = persistReducer(persistConfig, persistReducers);

  export const store = configureStore({
    reducer: {
      global: GlobalStore.reducers,
      message: MessageStore.reducers,
      toastr: ToastrStore.reducers,
      persistedReducers,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

  export const persistor = persistStore(store);

  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
  export const useAppSelector = useSelector.withTypes<RootState>();
}

export default AppStore;
