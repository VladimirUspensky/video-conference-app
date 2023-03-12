import { Blur } from "../blur";
import st from "./styles.scss";
import cn from "classnames";

type TProps = {
  className?: string;
  classNameWrapper?: string;
};

export const Tooltip: React.FC<TProps> = ({
  children,
  className,
  classNameWrapper,
}) => {
  return (
    <div className={cn(st.tooltip, classNameWrapper)}>
      <Blur className={st.blur} />
      <div className={cn(st.tooltipContent, className)}>{children}</div>
    </div>
  );
};
