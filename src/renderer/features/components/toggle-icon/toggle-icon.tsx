import { useState } from 'react';
import st from './styles.module.scss';
import cn from 'classnames';
import { Dots, DotsDirection } from '../dots';

type TProps = {
  Icon: JSX.Element;
  Tooltip?: JSX.Element;
  canActive?: boolean;
  withDots?: boolean;
  className?: string;
  onClick?: () => void;
};

export const ToggleIcon = ({
  Icon,
  Tooltip,
  canActive,
  withDots,
  className,
  onClick,
}: TProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    onClick?.();
    canActive && setIsActive((isActive) => !isActive);
  };

  return (
    <button
      className={cn(
        st.toggleIcon,
        { [st.active]: isActive },
        { [st.withDots]: withDots },
        className
      )}
      onClick={handleClick}
    >
      {Tooltip && <div className={st.toggleIconTooltip}>{Tooltip}</div>}
      {Icon}
      {withDots && (
        <Dots
          className={st.toggleIconDots}
          direction={DotsDirection.VERTICAL}
        />
      )}
    </button>
  );
};
