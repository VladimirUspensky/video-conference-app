import st from './styles.module.scss';
import cn from 'classnames';

export enum DotsDirection {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}

type TProps = {
  direction?: DotsDirection;
  className?: string;
};

export const Dots = ({
  direction = DotsDirection.VERTICAL,
  className,
}: TProps) => {
  return (
    <div
      className={cn(
        st.dots,
        {
          [st.horizontal]: direction === DotsDirection.HORIZONTAL,
        },
        {
          [st.vertical]: direction === DotsDirection.VERTICAL,
        },
        className
      )}
    >
      <span />
      <span />
      <span />
    </div>
  );
};
