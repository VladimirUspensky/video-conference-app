import st from './styles.module.scss';
import cn from 'classnames';

export enum ButtonTypes {
  PRIMARY = 'primary',
  OUTLINE = 'outline',
  DISABLED = 'disabled',
}

type TProps = {
  text: string;
  className?: string;
  Icon?: JSX.Element;
  type?: ButtonTypes;
  mini?: boolean;
  onClick?: () => void;
};

export const Button = ({
  text,
  className,
  Icon,
  type = ButtonTypes.PRIMARY,
  onClick,
  mini,
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
        },
        {
          [st.disabled]: type === ButtonTypes.DISABLED,
        }
      )}
      onClick={onClick}
      style={{ padding: mini ? '10px' : null }}
    >
      {text}
      {Icon && Icon}
    </button>
  );
};
