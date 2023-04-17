import st from './styles.module.scss';

type TProps = {
  Icon: JSX.Element;
  text: string;
  onClick?: () => void;
};

export const DotsTooltipItem = ({ Icon, text, onClick }: TProps) => {
  return (
    <div onClick={onClick} className={st.dotsTooltipItem}>
      {Icon} <span>{text}</span>
    </div>
  );
};
