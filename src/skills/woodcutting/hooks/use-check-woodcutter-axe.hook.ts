import React from "react";
import usePlayerEquipmentStore from "../../../store/hooks/use-player-equipment-store.hook";
import useMessageStore from "../../../store/hooks/use-message-store.hook";
import useGlobalStore from "../../../store/hooks/use-global-store.hook";
import Translation from "../../../language/transltion";

const useCheckWoodcutterAxe = () => {
  const {
    getGlobal: { language },
  } = useGlobalStore();
  const { addMessage } = useMessageStore();
  const { playerHandItem } = usePlayerEquipmentStore();

  const hasWoodcuttersAxe = React.useMemo(
    () =>
      playerHandItem?.defName === "woodcuttersAxe" ||
      playerHandItem?.defName === "woodcuttersAxeUncommon" ||
      playerHandItem?.defName === "woodcuttersAxeRare" ||
      playerHandItem?.defName === "woodcuttersAxeEpic" ||
      playerHandItem?.defName === "woodcuttersAxeLegendary",
    [playerHandItem]
  );
  const canUseWoodcutting = React.useMemo(() => hasWoodcuttersAxe, [hasWoodcuttersAxe]);

  React.useEffect(() => {
    if (!hasWoodcuttersAxe) {
      addMessage({
        text: Translation.translateFunctions[language].youNeedItemForSkill(`${language === "en" ? "Woodcutters Axe" : "Oduncu Baltası"}`),
        type: "error",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasWoodcuttersAxe]);

  return canUseWoodcutting;
};

export default useCheckWoodcutterAxe;
