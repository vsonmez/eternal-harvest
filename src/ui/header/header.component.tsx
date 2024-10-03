import React from "react";
import BgSoundComponent from "../bg-sound.component";
import HeaderHungerComponent from "./header-hunger.component";
import HeaderGoldComponent from "./header-gold.component";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-2 border-b border-gray-500 p-2">
      <div className="flex gap-2 items-center">
        <HeaderHungerComponent />
        <HeaderGoldComponent />
      </div>
      <BgSoundComponent />
    </header>
  );
};

export default React.memo(Header);
