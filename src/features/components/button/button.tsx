import st from "./styles.scss";
import cn from "classnames";

export enum ButtonTypes {
  PRIMARY = "primary",
  OUTLINE = "outline",
}

type TProps = {
  text: string;
  className?: string;
  Icon?: JSX.Element;
  type?: ButtonTypes;
};

export const Button = ({
  text,
  className,
  Icon,
  type = ButtonTypes.PRIMARY,
}: TProps) => {
  return (
    <button
      className={cn(
        st.button,
        className,
        {
          [st.primary]: type === ButtonTypes.PRIMARY,
        },
        {
          [st.outline]: type === ButtonTypes.OUTLINE,
        }
      )}
    >
      {text}
      {Icon && Icon}
    </button>
  );
};
