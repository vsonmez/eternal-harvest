import React from "react";
import usePlayerEquipmentStore from "../../../store/hooks/use-player-equipment-store.hook";
import useMessageStore from "../../../store/hooks/use-message-store.hook";
import useGlobalStore from "../../../store/hooks/use-global-store.hook";
import Translation from "../../../language/transltion";

const useCheckPickAxe = () => {
  const {
    getGlobal: { language },
  } = useGlobalStore();
  const { addMessage } = useMessageStore();
  const { playerHandItem } = usePlayerEquipmentStore();

  const hasPickAxe = React.useMemo(
    () =>
      playerHandItem?.defName === "pickaxe" ||
      playerHandItem?.defName === "pickaxeUncommon" ||
      playerHandItem?.defName === "pickaxeRare" ||
      playerHandItem?.defName === "pickaxeEpic" ||
      playerHandItem?.defName === "pickaxeLegendary",
    [playerHandItem]
  );
  const canUseMining = React.useMemo(() => hasPickAxe, [hasPickAxe]);

  React.useEffect(() => {
    if (!hasPickAxe) {
      addMessage({
        text: Translation.translateFunctions[language].youNeedItemForSkill(`${language === "en" ? "Pickaxe" : "Kazma"}`),
        type: "error",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasPickAxe]);

  return canUseMining;
};

export default useCheckPickAxe;
