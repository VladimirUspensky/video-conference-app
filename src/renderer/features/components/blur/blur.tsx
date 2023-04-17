import st from './styles.module.scss';
import cn from 'classnames';

type TProps = {
  className?: string;
};

export const Blur = ({ className }: TProps) => {
  return <div className={cn(st.blur, className)} />;
};
