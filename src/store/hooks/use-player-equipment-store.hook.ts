import AppStore from "..";
import BagItem from "../../items/models/bag-item.type";
import PlayerEquipmentStore from "../slices/player-equipment.slice";

const usePlayerEquipmentStore = () => {
  const dispatch = AppStore.useAppDispatch();
  const playerHandItem = AppStore.useAppSelector(PlayerEquipmentStore.select.getHand);
  const playerHeadItem = AppStore.useAppSelector(PlayerEquipmentStore.select.getHead);
  const playerBodyItem = AppStore.useAppSelector(PlayerEquipmentStore.select.getBody);
  const playerFeetItem = AppStore.useAppSelector(PlayerEquipmentStore.select.getFeet);
  const playerLegsItem = AppStore.useAppSelector(PlayerEquipmentStore.select.getLegs);
  const playerHandLeftItem = AppStore.useAppSelector(PlayerEquipmentStore.select.getHandLeft);

  const setPlayerHandItem = (item: BagItem | null) => {
    dispatch(PlayerEquipmentStore.actions.setHand(item));
  };

  const setPlayerHeadItem = (item: BagItem | null) => {
    dispatch(PlayerEquipmentStore.actions.setHead(item));
  };

  const setPlayerBodyItem = (item: BagItem | null) => {
    dispatch(PlayerEquipmentStore.actions.setBody(item));
  };

  const setPlayerFeetItem = (item: BagItem | null) => {
    dispatch(PlayerEquipmentStore.actions.setFeet(item));
  };

  const setPlayerLegsItem = (item: BagItem | null) => {
    dispatch(PlayerEquipmentStore.actions.setLegs(item));
  };

  const setPlayerHandLeftItem = (item: BagItem | null) => {
    dispatch(PlayerEquipmentStore.actions.setHandLeft(item));
  };

  return {
    playerHandItem,
    playerHeadItem,
    playerBodyItem,
    playerFeetItem,
    playerLegsItem,
    playerHandLeftItem,
    setPlayerHandItem,
    setPlayerHeadItem,
    setPlayerBodyItem,
    setPlayerFeetItem,
    setPlayerLegsItem,
    setPlayerHandLeftItem,
  };
};

export default usePlayerEquipmentStore;
