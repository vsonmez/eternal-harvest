import React from "react";
import DialogComponent from "../ui/dialog.component";
import ButtonComponent from "../ui/button.component";
import useBeggingStore from "../store/hooks/skills/use-begging-store.hook";
import useToastrStore from "../store/hooks/use-toastr-store.hook";
import useFishingStore from "../store/hooks/skills/use-fishing-store.hook";
import useWoodcutterStore from "../store/hooks/skills/use-woodcutter-store.hook";
import useCookingStore from "../store/hooks/skills/use-cooking-store.hook";
import useMiningStore from "../store/hooks/skills/use-mining-store.hook";

type Props = {
  onClose: () => void;
};

const PremiumMarket: React.FC<Props> = ({ onClose }) => {
  const { setHasAutoBegging, hasAutoBegging } = useBeggingStore();
  const { setAutoFishing, hasAutoFishing } = useFishingStore();
  const { hasAutoWoodcutting, setAutoWoodcutting } = useWoodcutterStore();
  const { hasAutoCooking, setAutoCooking } = useCookingStore();
  const { hasAutoMining, setHasAutoMining } = useMiningStore();
  const { addToastrMessage } = useToastrStore();
  return (
    <DialogComponent onClose={onClose} title="Premium Market" className="premium">
      <ul className="flex flex-col gap-3">
        <li>
          <ButtonComponent
            disabled={hasAutoBegging}
            className="w-full flex flex-col items-center gap-1"
            onClick={() => {
              setHasAutoBegging(true);
              addToastrMessage({
                type: "success",
                text: "You bought the auto begging!",
              });
            }}
          >
            <span className="flex items-center gap-2 text-lg">
              <span>Auto Begging</span>
              {!hasAutoBegging && <span>Free for test.</span>}
            </span>
            {hasAutoBegging && <span>Already bought</span>}
            {!hasAutoBegging && (
              <>
                <span>This is not an idle feature.</span>
                <span>It just automatically clicks the button.</span>
              </>
            )}
          </ButtonComponent>
        </li>
        <li>
          <ButtonComponent
            disabled={hasAutoFishing}
            className="w-full flex flex-col items-center gap-1"
            onClick={() => {
              setAutoFishing(true);
              addToastrMessage({
                type: "success",
                text: "You bought the auto fishing!",
              });
            }}
          >
            <span className="flex items-center gap-2 text-lg">
              <span>Auto Fishing</span>
              {!hasAutoFishing && <span>Free for test.</span>}
            </span>
            {hasAutoFishing && <span>Already bought</span>}
            {!hasAutoFishing && (
              <>
                <span>This is not an idle feature.</span>
                <span>It just automatically clicks the button.</span>
              </>
            )}
          </ButtonComponent>
        </li>
        <li>
          <ButtonComponent
            disabled={hasAutoWoodcutting}
            className="w-full flex flex-col items-center gap-1"
            onClick={() => {
              setAutoWoodcutting(true);
              addToastrMessage({
                type: "success",
                text: "You bought the auto woodcutting!",
              });
            }}
          >
            <span className="flex items-center gap-2 text-lg">
              <span>Auto Woodcutting</span>
              {!hasAutoWoodcutting && <span>Free for test.</span>}
            </span>
            {hasAutoWoodcutting && <span>Already bought</span>}
            {!hasAutoWoodcutting && (
              <>
                <span>This is not an idle feature.</span>
                <span>It just automatically clicks the button.</span>
              </>
            )}
          </ButtonComponent>
        </li>
        <li>
          <ButtonComponent
            disabled={hasAutoCooking}
            className="w-full flex flex-col items-center gap-1"
            onClick={() => {
              setAutoCooking(true);
              addToastrMessage({
                type: "success",
                text: "You bought the auto cooking!",
              });
            }}
          >
            <span className="flex items-center gap-2 text-lg">
              <span>Auto Cooking</span>
              {!hasAutoCooking && <span>Free for test.</span>}
            </span>
            {hasAutoCooking && <span>Already bought</span>}
            {!hasAutoCooking && (
              <>
                <span>This is not an idle feature.</span>
                <span>It just automatically clicks the button.</span>
              </>
            )}
          </ButtonComponent>
        </li>
        <li>
          <ButtonComponent
            disabled={hasAutoMining}
            className="w-full flex flex-col items-center gap-1"
            onClick={() => {
              setHasAutoMining(true);
              addToastrMessage({
                type: "success",
                text: "You bought the auto mining!",
              });
            }}
          >
            <span className="flex items-center gap-2 text-lg">
              <span>Auto Mining</span>
              {!hasAutoMining && <span>Free for test.</span>}
            </span>
            {hasAutoMining && <span>Already bought</span>}
            {!hasAutoMining && (
              <>
                <span>This is not an idle feature.</span>
                <span>It just automatically clicks the button.</span>
              </>
            )}
          </ButtonComponent>
        </li>
      </ul>
    </DialogComponent>
  );
};

export default React.memo(PremiumMarket);
