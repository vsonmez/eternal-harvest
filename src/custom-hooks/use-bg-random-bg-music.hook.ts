import React from "react";
import bgMusic1 from "../sounds/bg-sounds/01.mp3";
import bgMusic2 from "../sounds/bg-sounds/02.mp3";
import bgMusic3 from "../sounds/bg-sounds/03.mp3";
import bgMusic4 from "../sounds/bg-sounds/04.mp3";
import bgMusic5 from "../sounds/bg-sounds/05.mp3";
import bgMusic6 from "../sounds/bg-sounds/06.mp3";
import bgMusic7 from "../sounds/bg-sounds/07.mp3";

const useRandomBgMusic = () => {
  const audio = React.useMemo(() => {
    const audio = new Audio();
    audio.loop = true;
    audio.volume = 0.1;
    return audio;
  }, []);
  const bgMusicList = React.useMemo(() => [bgMusic1, bgMusic2, bgMusic3, bgMusic4, bgMusic5, bgMusic6, bgMusic7], []);

  const onPlay = React.useCallback(() => {
    const randomIndex = Math.floor(Math.random() * bgMusicList.length);
    audio.src = bgMusicList[randomIndex];
    audio.play();
  }, [audio, bgMusicList]);

  const onPause = React.useCallback(() => {
    audio.pause();
    audio.currentTime = 0;
  }, [audio]);

  return { audio, onPlay, onPause };
};
export default useRandomBgMusic;
