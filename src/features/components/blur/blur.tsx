import st from "./styles.scss";
import cn from "classnames";

type TProps = {
  className?: string;
};

export const Blur = ({ className }: TProps) => {
  return <div className={cn(st.blur, className)} />;
};
