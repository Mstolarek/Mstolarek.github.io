import { useEffect, useRef } from "react";
import { useNavContext } from "../Context/NavContext";
import { useOnScreen } from "./useOnScreen";

export const useNav = (navLinkId: string) => {
  const ref = useRef(null);

  const { setActiveNavLinkId } = useNavContext();

  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      setActiveNavLinkId(navLinkId);
    }
  }, [isOnScreen, setActiveNavLinkId, navLinkId]);

  return ref;
};
