import React from "react";
import useMessageStore from "../../../store/hooks/use-message-store.hook";
import usePlayerEquipmentStore from "../../../store/hooks/use-player-equipment-store.hook";

const useCheckFishingRod = () => {
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
        text: "You need a Fishing Rod to collect fish.",
        type: "error",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasFishgingRod]);

  return canUseFisginRod;
};
export default useCheckFishingRod;
