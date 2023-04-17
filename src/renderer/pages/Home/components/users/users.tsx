import { Blur } from '@features';
import cn from 'classnames';
import st from './styles.module.scss';
import CameraImage from '@assets/images/cam.png';

type TProps = {
  isOpen: boolean;
};

export const Users = ({ isOpen }: TProps) => {
  return (
    <div className={cn(st.users, { [st.open]: isOpen })}>
      <Blur className={st.usersBlur} />
      <div className={st.usersContent}>
        <img src={CameraImage} alt={'Участник'} />
        <img src={CameraImage} alt={'Участник'} />
      </div>
    </div>
  );
};
