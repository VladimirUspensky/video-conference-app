import Logo from '@assets/svg/logo2.svg';
import { useHistory } from 'react-router-dom';
import st from './styles.module.scss';
import { Actions, ConfInfo, DeskActions } from './ui';
import cn from 'classnames';
import { Container } from '../container';

type TProps = {
  onFullScreen: () => void;
  isFullScreen: boolean;
  isDesk: boolean;
};

export const HeaderFixed = ({ onFullScreen, isFullScreen, isDesk }: TProps) => {
  const history = useHistory();

  const onGoAuth = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    history.push('/1');
  };

  return (
    <header
      className={cn(
        st.header,
        { [st.fullscreen]: isFullScreen },
        { [st.desk]: isDesk }
      )}
    >
      <Container>
        <a href="/" onClick={onGoAuth} className={st.logo}>
          <Logo />
        </a>
        {!isDesk && <ConfInfo name="Название конференции" time="01:47:05" />}
        {isDesk ? <DeskActions /> : <Actions onFullScreen={onFullScreen} />}
      </Container>
    </header>
  );
};
