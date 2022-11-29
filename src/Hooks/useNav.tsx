import { useRef, useEffect } from "react";
import { useOnScreen } from "./useOnScreen";
import { useNavContext } from "../Context/NavContext";

export const useNav = (navLinkId) => {
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
