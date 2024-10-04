import React from "react";
import usePlayerBagStore from "../../store/hooks/use-player-bag-store.hook";
import getCookableItems from "../../utils/get-cookable-items.util";
import ButtonComponent from "../../ui/button.component";
import BagItem from "../../items/models/bag-item.type";
import useMessageStore from "../../store/hooks/use-message-store.hook";

const Cooking = () => {
  const [selectedItem, setSelectedItem] = React.useState<BagItem | null>(null);
  const { playerBag } = usePlayerBagStore();
  const cookableItems = React.useMemo(() => getCookableItems(Object.values(playerBag)), [playerBag]);
  const { addMessage } = useMessageStore();

  const onSelectItem = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const item = playerBag[event.target.value as keyof typeof playerBag];
      if (item) {
        setSelectedItem(item);
      }
    },
    [playerBag]
  );

  React.useEffect(() => {
    addMessage({
      text: "COMING SOON",
      type: "warning",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="border border-gray-500 p-2 cooking flex flex-col gap-2">
      <div className="bg-black/70 p-2 flex items-center justify-between gap-1">
        <h3>
          Level: {0}/{0}
        </h3>
        <h3>
          XP: {0}/{0}
        </h3>
      </div>
      <div className="bg-black/70 p-2 flex flex-col gap-1 text-center">
        <h2>Cooking</h2>
        <select className="w-full bg-black/70" disabled={cookableItems.length === 0} onChange={onSelectItem}>
          {cookableItems.length > 0 && <option selected>Select Item to cook</option>}
          {cookableItems.length === 0 && <option selected>No cookable items</option>}
          {cookableItems.map((item) => (
            <option value={item.defName}>{item.name}</option>
          ))}
        </select>
        <ButtonComponent disabled={cookableItems.length === 0} onClick={() => {}}>
          Start Cooking
        </ButtonComponent>
      </div>
      {/* <div className="bg-black/70 p-2 flex flex-col gap-1">
        <span>Begging level affects the amount of items gained.</span>
        <span>
          +<FixedNumberComponent number={deceptionBonus} />% success bonus from Deception.
        </span>
      </div> */}
    </div>
  );
};

export default React.memo(Cooking);
