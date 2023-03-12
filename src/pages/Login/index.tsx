import st from "./styles.scss";
import {
  Button,
  ButtonTypes,
  Container,
  Header,
  Input,
  ToggleIcon,
  Blur,
  Images,
} from "@features";
import MuteIcon from "@assets/svg/mute.svg";
import FilmIcon from "@assets/svg/film.svg";
import GridIcon from "@assets/svg/grid.svg";
import ImageIcon from "@assets/svg/image.svg";
import PersonAddIcon from "@assets/svg/person-add.svg";
import MicrophoneIcon from "@assets/svg/microphone.svg";
import { useEffect } from "react";

const ICON_SIZE = { width: "40px", height: "40px" };

const Auth = () => {
  useEffect(() => {
    document.body.style.background = "#015869";
  }, []);

  return (
    <Container>
      <Header withNav={false} />
      <div className={st.login}>
        <Blur className={st.loginBlur} />
        <h1 className={st.title}>Присоединиться ко встрече</h1>
        <Input placeholder="Название конференции" className={st.input} />
        <div className={st.flex}>
          <Button className={st.button} text="Присоединиться" />
          <Button
            className={st.button}
            text="Присоединиться без звука"
            Icon={<MuteIcon />}
            type={ButtonTypes.OUTLINE}
          />
        </div>
        <div className={st.icons}>
          <ToggleIcon Icon={<FilmIcon {...ICON_SIZE} />} canActive={true} />
          <ToggleIcon
            Icon={<MicrophoneIcon {...ICON_SIZE} />}
            canActive={true}
          />
          <ToggleIcon
            Icon={<PersonAddIcon {...ICON_SIZE} />}
            canActive={true}
          />
          <ToggleIcon Icon={<ImageIcon {...ICON_SIZE} />} canActive={true} />
          <ToggleIcon Icon={<GridIcon {...ICON_SIZE} />} canActive={true} />
        </div>
      </div>
      <Images />
    </Container>
  );
};

export default Auth;
