import {
  CSSProperties,
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useStartGrab, useUnGrab } from "../../../store/hooks";
import { Item, Placeholder } from "./UI";

export const StatusItem: FC<PropsWithChildren & { id: number }> = ({
  children,
  id,
}) => {
  const grabStart = useStartGrab();
  const grabStop = useUnGrab();
  const ref = useRef<HTMLLIElement>(null);
  const [isGrab, setIsGrab] = useState(false);
  const [elemntStyle, setElementStyle] = useState<CSSProperties | undefined>();

  const handleGrab = useCallback(() => {
    grabStart(id);
    setElementStyle({
      width: `${ref?.current?.offsetWidth}px`,
      pointerEvents: "none",
    });
    setIsGrab(true);
  }, []);

  const handleUnGrab = useCallback(() => {
    grabStop();
    setIsGrab(false);
    setElementStyle(undefined);
  }, []);

  const handleMove = useCallback((event: MouseEvent) => {
    setElementStyle((value) => ({
      ...value,
      top: `${event.clientY - 50}px`,
      left: `${event.clientX - 50}px`,
    }));
  }, []);

  useEffect(() => {
    if (isGrab) {
      document.body.addEventListener("mousemove", handleMove);
      document.body.addEventListener("mouseup", handleUnGrab);
    } else {
      document.body.removeEventListener("mouseup", handleUnGrab);
      document.body.removeEventListener("mousemove", handleMove);
    }
    return () => {
      document.body.removeEventListener("mouseup", handleUnGrab);
      document.body.removeEventListener("mousemove", handleMove);
    };
  }, [isGrab]);

  return (
    <>
      <Item
        style={elemntStyle}
        ref={ref}
        isGrab={isGrab}
        onMouseDown={handleGrab}
      >
        {children}
      </Item>
      {isGrab && <Placeholder />}
    </>
  );
};
