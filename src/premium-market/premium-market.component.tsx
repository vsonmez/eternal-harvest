import React from "react";
import DialogComponent from "../ui/dialog.component";
import ButtonComponent from "../ui/button.component";
import useBeggingStore from "../store/hooks/skills/use-begging-store.hook";
import useToastrStore from "../store/hooks/use-toastr-store.hook";
import useFishingStore from "../store/hooks/skills/use-fishing-store.hook";
import useWoodcutterStore from "../store/hooks/skills/use-woodcutter-store.hook";
import useCookingStore from "../store/hooks/skills/use-cooking-store.hook";
import useMiningStore from "../store/hooks/skills/use-mining-store.hook";
import useGlobalStore from "../store/hooks/use-global-store.hook";
import Translation from "../language/transltion";
import useCarpentryStore from "../store/hooks/skills/use-carpentry-store.hook";

type Props = {
  onClose: () => void;
};

const PremiumMarket: React.FC<Props> = ({ onClose }) => {
  const { setHasAutoBegging, hasAutoBegging } = useBeggingStore();
  const { setAutoFishing, hasAutoFishing } = useFishingStore();
  const { hasAutoWoodcutting, setAutoWoodcutting } = useWoodcutterStore();
  const { hasAutoCooking, setAutoCooking } = useCookingStore();
  const { hasAutoMining, setHasAutoMining } = useMiningStore();
  const { setAutoCarpentry, hasAutoCarpentry } = useCarpentryStore();
  const { addToastrMessage } = useToastrStore();
  const {
    getGlobal: { language },
  } = useGlobalStore();
  return (
    <DialogComponent onClose={onClose} title={Translation.translate[language].premiumMarket} className="premium">
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
              <span>{Translation.translate[language].autoBegging}</span>
              {!hasAutoBegging && <span>{Translation.translate[language].freeForTest}</span>}
            </span>
            {hasAutoBegging && <span>{Translation.translate[language].alreadyBought}</span>}
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
              <span>{Translation.translate[language].autoFishing}</span>
              {!hasAutoFishing && <span>{Translation.translate[language].freeForTest}</span>}
            </span>
            {hasAutoFishing && <span>{Translation.translate[language].alreadyBought}</span>}
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
              <span>{Translation.translate[language].autoWoodcutting}</span>
              {!hasAutoWoodcutting && <span>{Translation.translate[language].freeForTest}</span>}
            </span>
            {hasAutoWoodcutting && <span>{Translation.translate[language].alreadyBought}</span>}
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
              <span>{Translation.translate[language].autoCooking}</span>
              {!hasAutoCooking && <span>{Translation.translate[language].freeForTest}</span>}
            </span>
            {hasAutoCooking && <span>{Translation.translate[language].alreadyBought}</span>}
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
              <span>{Translation.translate[language].autoMining}</span>
              {!hasAutoMining && <span>{Translation.translate[language].freeForTest}</span>}
            </span>
            {hasAutoMining && <span>{Translation.translate[language].alreadyBought}</span>}
          </ButtonComponent>
        </li>
        <li>
          <ButtonComponent
            disabled={hasAutoCarpentry}
            className="w-full flex flex-col items-center gap-1"
            onClick={() => {
              setAutoCarpentry(true);
              addToastrMessage({
                type: "success",
                text: "You bought the auto carpentry!",
              });
            }}
          >
            <span className="flex items-center gap-2 text-lg">
              <span>{Translation.translate[language].autoCarpentry}</span>
              {!hasAutoCarpentry && <span>{Translation.translate[language].freeForTest}</span>}
            </span>
            {hasAutoCarpentry && <span>{Translation.translate[language].alreadyBought}</span>}
          </ButtonComponent>
        </li>
      </ul>
    </DialogComponent>
  );
};

export default React.memo(PremiumMarket);
