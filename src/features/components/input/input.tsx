import st from "./styles.scss";
import cn from "classnames";

type TProps = {
  Button?: JSX.Element;
  placeholder?: string;
  className?: string;
};

export const Input = ({ Button, placeholder, className }: TProps) => {
  return (
    <div className={cn(st.input, className)}>
      <input placeholder={placeholder} type="text" />
      {Button && Button}
    </div>
  );
};
