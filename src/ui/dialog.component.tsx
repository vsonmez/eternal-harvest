import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import ButtonComponent from "./button.component";
import usePlayerGoldStore from "../store/hooks/use-player-gold-store.hook";
import GoldViewComponent from "./gold-view.component";
import ToastrComponent from "../toastr/toastr.component";
import useToastrStore from "../store/hooks/use-toastr-store.hook";
import HeaderHungerComponent from "./header/header-hunger.component";

type Props = {
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  addOn?: React.ReactNode;
  className?: string;
  showGold?: boolean;
  showHunger?: boolean;
};

const Dialog: React.FC<Props> = ({ onClose, title, children, className, showGold, showHunger, addOn }) => {
  const { playerGold } = usePlayerGoldStore();
  const dialog = React.useRef<HTMLDialogElement>(null);
  const { resetToastrList } = useToastrStore();

  const handleClose = React.useCallback(() => {
    dialog.current?.close();
    onClose();
    resetToastrList();
  }, [dialog, onClose, resetToastrList]);

  React.useEffect(() => {
    dialog.current?.showModal();
  }, [dialog]);

  return (
    <dialog ref={dialog} className={`bg-transparent h-full ${className}`}>
      <div className="p-3 flex flex-col bg-slate-950/80 text-white h-full">
        <h1 className="flex gap-2 items-center justify-between pb-3">
          <span className="text-lg">{title}</span>
          <div className="flex flex-col">
            {showGold && (
              <div className="flex items-center gap-0.5">
                <span>Gold:</span>
                <strong>
                  <GoldViewComponent goldAmount={playerGold} />
                </strong>
              </div>
            )}
            {showHunger && (
              <div>
                <HeaderHungerComponent showText />
              </div>
            )}
          </div>
          <ButtonComponent className="border-rose-700 text-rose-500" onClick={handleClose}>
            <XMarkIcon className="w-3 h-3" />
          </ButtonComponent>
        </h1>
        {addOn && <div>{addOn}</div>}
        <div className="overflow-auto h-full">{children}</div>
      </div>
      <ToastrComponent />
    </dialog>
  );
};

export default React.memo(Dialog);
