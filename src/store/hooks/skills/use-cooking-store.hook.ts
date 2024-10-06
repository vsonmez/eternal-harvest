import AppStore from "../..";
import CookingStore from "../../slices/skills/cooking-store.slice";

const useCookingStore = () => {
  const dispatch = AppStore.useAppDispatch();
  const cookingXP = AppStore.useAppSelector(CookingStore.select.cookingXP);
  const cookingXPToNextLevel = AppStore.useAppSelector(CookingStore.select.cookingXPToNextLevel);
  const cookingLevel = AppStore.useAppSelector(CookingStore.select.cookingLevel);
  const hasAutoCooking = AppStore.useAppSelector(CookingStore.select.hasAutoCooking);

  const increaseCookingXP = (amount: number) => {
    dispatch(CookingStore.actions.increaseCookingXP(amount));
  };
  const increaseCookingLevel = () => {
    dispatch(CookingStore.actions.increaseCookingLevel());
  };
  const setAutoCooking = (value: boolean) => {
    dispatch(CookingStore.actions.setAutoCooking(value));
  };

  return {
    cookingXP,
    cookingXPToNextLevel,
    cookingLevel,
    hasAutoCooking,
    increaseCookingXP,
    increaseCookingLevel,
    setAutoCooking,
  };
};
export default useCookingStore;
