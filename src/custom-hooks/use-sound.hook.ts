import React from "react";

const useSound = ({ sound, playbackRate, loop }: { sound: string; playbackRate?: number; loop?: boolean }) => {
  const audio = React.useMemo(() => {
    const audio = new Audio(sound);
    audio.loop = loop || false;
    audio.volume = 0.2;
    audio.playbackRate = playbackRate || 1;
    return audio;
  }, [sound, loop, playbackRate]);

  const play = React.useCallback(() => {
    audio.play();
  }, [audio]);

  const pause = React.useCallback(() => {
    audio && audio.pause();
    audio.currentTime = 0;
  }, [audio]);

  return { play, pause };
};

export default useSound;
