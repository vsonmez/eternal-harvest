import React from "react";
import DialogComponent from "../ui/dialog.component";
import ButtonComponent from "../ui/button.component";

type Props = {
  onClose: () => void;
};

const PremiumMarket: React.FC<Props> = ({ onClose }) => {
  return (
    <DialogComponent onClose={onClose} title="Premium Market" className="premium">
      <h2 className="text-center text-lg py-3">Coming Soon</h2>
      <ul className="flex flex-col gap-3">
        <li>
          <ButtonComponent className="w-full flex flex-col items-center gap-1" onClick={() => {}} disabled>
            <span className="flex items-center gap-2 text-lg">
              <span>Auto Fishing</span>
              <span>1$</span>
            </span>
            <span>This is not an idle feature.</span>
            <span>It just automatically clicks the button.</span>
          </ButtonComponent>
        </li>
        <li>
          <ButtonComponent className="w-full flex flex-col items-center gap-1" onClick={() => {}} disabled>
            <span className="flex items-center gap-2 text-lg">
              <span>Auto Begging</span>
              <span>1$</span>
            </span>
            <span>This is not an idle feature.</span>
            <span>It just automatically clicks the button.</span>
          </ButtonComponent>
        </li>
        <li>
          <ButtonComponent className="w-full flex flex-col items-center gap-1" onClick={() => {}} disabled>
            <span className="flex items-center gap-2 text-lg">
              <span>Auto Woodcutting</span>
              <span>1$</span>
            </span>
            <span>This is not an idle feature.</span>
            <span>It just automatically clicks the button.</span>
          </ButtonComponent>
        </li>
        <li>
          <ButtonComponent className="w-full flex flex-col items-center gap-1" onClick={() => {}} disabled>
            <span className="flex items-center gap-2 text-lg">
              <span>Auto Cooking</span>
              <span>1$</span>
            </span>
            <span>This is not an idle feature.</span>
            <span>It just automatically clicks the button.</span>
          </ButtonComponent>
        </li>
      </ul>
    </DialogComponent>
  );
};

export default React.memo(PremiumMarket);
