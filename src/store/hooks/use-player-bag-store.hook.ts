import AppStore from "..";
import BagItem from "../../items/models/bag-item.type";
import PlayerBagStore from "../slices/player-bag.slice";

const usePlayerBagStore = () => {
  const dispatch = AppStore.useAppDispatch();
  const playerBag = AppStore.useAppSelector(PlayerBagStore.select.getPlayerBag);

  const addItemToPlayerBag = (item: BagItem) => {
    dispatch(PlayerBagStore.actions.addItemToPlayerBag(item));
  };

  const removeItemFromPlayerBag = (item: BagItem) => {
    dispatch(PlayerBagStore.actions.removeItemFromPlayerBag(item));
  };

  const lockItem = (item: BagItem) => {
    dispatch(PlayerBagStore.actions.lockItem(item));
  };

  const unlockItem = (item: BagItem) => {
    dispatch(PlayerBagStore.actions.unlockItem(item));
  };

  const setItemEquipped = (item: BagItem) => {
    dispatch(PlayerBagStore.actions.setItemEquipped(item));
  };

  const setItemUnequipped = (item: BagItem) => {
    dispatch(PlayerBagStore.actions.setItemUnequipped(item));
  };

  return {
    playerBag,
    addItemToPlayerBag,
    removeItemFromPlayerBag,
    lockItem,
    unlockItem,
    setItemEquipped,
    setItemUnequipped,
  };
};

export default usePlayerBagStore;
