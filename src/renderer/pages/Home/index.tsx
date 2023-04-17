import { FooterFixed, HeaderFixed } from '@features';
import CameraImage from '@assets/images/cam.png';
import DotsIcon from '@assets/svg/dots.svg';
import st from './styles.module.scss';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { Desk, Users } from './components';
import { Draggable } from './components/draggable';

const Home = () => {
  const [settings, setSettings] = useState({
    isFullScreen: false,
    isOpenUsers: false,
    isDesk: false,
  });

  useEffect(() => {
    if (!settings.isDesk) document.body.style.background = '#002831';

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleDesk = () => {
    if (!settings.isDesk) document.body.style.background = '#015869';
    else document.body.style.background = '#002831';
    setSettings((settings) => ({
      ...settings,
      isDesk: !settings.isDesk,
    }));
  };

  const handleFullScreen = () => {
    setSettings((settings) => ({
      ...settings,
      isFullScreen: !settings.isFullScreen,
    }));
  };

  const handleOpenUsers = () => {
    setSettings((settings) => ({
      ...settings,
      isOpenUsers: !settings.isOpenUsers,
    }));
  };

  return (
    <>
      {settings.isDesk && <DotsIcon />}
      <HeaderFixed
        isDesk={settings.isDesk}
        isFullScreen={settings.isFullScreen}
        onFullScreen={handleFullScreen}
      />
      {!settings.isDesk && (
        <img
          className={cn(st.webcam, { [st.fullscreen]: settings.isFullScreen })}
          src={CameraImage}
          alt="Веб-камера"
        />
      )}
      {settings.isDesk && <Desk />}
      {settings.isDesk && <Draggable />}
      <Users isOpen={settings.isOpenUsers} />
      <FooterFixed
        isDesk={settings.isDesk}
        onDesk={handleDesk}
        onOpenUsers={handleOpenUsers}
        isFullScreen={settings.isFullScreen}
      />
    </>
  );
};

export default Home;
