import React from "react";
import usePlayerEquipmentStore from "../../../store/hooks/use-player-equipment-store.hook";
import useMessageStore from "../../../store/hooks/use-message-store.hook";

const useCheckWoodcutterAxe = () => {
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
        text: "You need a Woodcutter's Axe to collect wood.",
        type: "error",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasWoodcuttersAxe]);

  return canUseWoodcutting;
};

export default useCheckWoodcutterAxe;
