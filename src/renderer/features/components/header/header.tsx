/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from '@assets/svg/logo.svg';
import { useHistory } from 'react-router-dom';
import st from './styles.module.scss';

type TProps = {
  withNav?: boolean;
};

export const Header = ({ withNav = true }: TProps) => {
  const history = useHistory();

  const onGoAuth = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    history.push('/1');
  };

  return (
    <header className={st.header}>
      <a href="/" onClick={onGoAuth}>
        <Logo />
      </a>
      {withNav && (
        <nav className={st.nav}>
          <a className={st.navLink} href="#">
            Техподдержка
          </a>
          <a className={st.navLink} href="#">
            Настройки
          </a>
        </nav>
      )}
    </header>
  );
};
