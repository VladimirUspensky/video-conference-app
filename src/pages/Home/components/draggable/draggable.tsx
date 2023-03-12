import { useRef } from "react";
import Moveable from "react-moveable";
import st from "./styles.scss";
import BackRightIcon from "@assets/svg/back-right.svg";
import cn from "classnames";

export const Draggable = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        className={cn(st.target, "target")}
        ref={targetRef}
        style={{
          transform: "translate(0px, 0px) rotate(0deg)",
        }}
      >
        <BackRightIcon />
      </div>
      <Moveable
        target={targetRef}
        rotatable={true}
        draggable={true}
        throttleRotate={0}
        rotationPosition={"top"}
        resizable={true}
        keepRatio={false}
        throttleResize={1}
        onRotate={(e) => {
          e.target.style.transform = e.drag.transform;
        }}
        onDrag={(e) => {
          e.target.style.transform = e.transform;
        }}
        onResize={(e) => {
          e.target.style.width = `${e.width}px`;
          e.target.style.height = `${e.height}px`;
          e.target.style.transform = e.drag.transform;
        }}
      />
    </>
  );
};
