import React from "react";
import useMessageStore from "../../../store/hooks/use-message-store.hook";
import usePlayerEquipmentStore from "../../../store/hooks/use-player-equipment-store.hook";
import useGlobalStore from "../../../store/hooks/use-global-store.hook";
import Translation from "../../../language/transltion";

const useCheckFishingRod = () => {
  const {
    getGlobal: { language },
  } = useGlobalStore();
  const { addMessage } = useMessageStore();
  const { playerHandItem } = usePlayerEquipmentStore();

  const hasFishgingRod = React.useMemo(
    () =>
      playerHandItem?.defName === "fishingRod" ||
      playerHandItem?.defName === "fishingRodUncommon" ||
      playerHandItem?.defName === "fishingRodRare" ||
      playerHandItem?.defName === "fishingRodEpic" ||
      playerHandItem?.defName === "fishingRodLegendary",
    [playerHandItem]
  );
  const canUseFisginRod = React.useMemo(() => hasFishgingRod, [hasFishgingRod]);

  React.useEffect(() => {
    if (!hasFishgingRod) {
      addMessage({
        text: Translation.translateFunctions[language].youNeedItemForSkill(`${language === "en" ? "Fishing Rod" : "Olta"}`),
        type: "error",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasFishgingRod]);

  return canUseFisginRod;
};
export default useCheckFishingRod;
