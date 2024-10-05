import React from "react";
import usePlayerEquipmentStore from "../../../store/hooks/use-player-equipment-store.hook";
import useMessageStore from "../../../store/hooks/use-message-store.hook";

const useCheckPickAxe = () => {
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
        text: "You need a Pickaxe to collect ore.",
        type: "error",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasPickAxe]);

  return canUseMining;
};

export default useCheckPickAxe;
