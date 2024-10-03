import React from "react";
import useRandomBgMusic from "../custom-hooks/use-bg-random-bg-music.hook";
import ButtonComponent from "./button.component";
import { MusicalNoteIcon } from "@heroicons/react/24/outline";

const BGsound = () => {
  const [isMusicOn, setIsMusicOn] = React.useState(false);
  const { onPlay, onPause } = useRandomBgMusic();

  const play = () => {
    onPlay();
    setIsMusicOn(true);
  };

  const pause = () => {
    onPause();
    setIsMusicOn(false);
  };

  return (
    <div>
      {isMusicOn && (
        <ButtonComponent className="flex items-center gap-2 bg-teal-700" onClick={() => pause()} ignoreIsBusy>
          <MusicalNoteIcon className="w-3 h-3" />
        </ButtonComponent>
      )}
      {!isMusicOn && (
        <ButtonComponent className="flex items-center gap-2 bg-rose-700" onClick={() => play()} ignoreIsBusy>
          <MusicalNoteIcon className="w-3 h-3" />
        </ButtonComponent>
      )}
    </div>
  );
};

export default React.memo(BGsound);
