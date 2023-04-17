import Avatar from '@assets/images/avatar.png';
import st from './styles.module.scss';

type TProps = {
  name: string;
  time: string;
};

export const ConfInfo = ({ name, time }: TProps) => {
  return (
    <div className={st.confInfo}>
      <img src={Avatar} alt="Аватар" className={st.confInfoAvatar} />
      <span className={st.confInfoName}>{name}</span>
      <span className={st.confInfoTime}>{time}</span>
    </div>
  );
};
