import { useEffect } from "react";
import useGiftStore from "../store/hooks/use-gift-store.hook";

const useTimeTrackerWithReward = () => {
  const { setTimeSpent } = useGiftStore();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSpent();
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useTimeTrackerWithReward;
