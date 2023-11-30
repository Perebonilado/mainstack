import { MutableRefObject, useEffect, useRef } from "react";
import { assertIsNode } from "../utils";

const useClickOutside = <T extends HTMLElement>(
  callback: () => any,
  additionalElementsToAvoidTriggeringClickOutide?: MutableRefObject<any>[]
) => {
  const domNode = useRef<T | null>(null);

  const handleClickOutside = ({ target }: MouseEvent) => {
    assertIsNode(target);
    if (
      domNode.current &&
      !domNode.current.contains(target) &&
      !additionalElementsToAvoidTriggeringClickOutide?.some((r) =>
        r.current.contains(target)
      )
    ) {
      callback();
    }
    return;
  };

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      handleClickOutside(e);
    });

    document.removeEventListener("mousedown", (e) => handleClickOutside(e));
  }, []);

  return domNode;
};

export default useClickOutside;
