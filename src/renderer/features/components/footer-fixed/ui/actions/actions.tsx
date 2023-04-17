import { Dots, DotsDirection, DotsTooltip, ToggleIcon } from '@features';
import FilmIcon from '@assets/svg/film.svg';
import MicrophoneIcon from '@assets/svg/microphone.svg';
import LaptopIcon from '@assets/svg/laptop.svg';
import ChatIcon from '@assets/svg/chat.svg';
import PanIcon from '@assets/svg/pan.svg';
import PersonIcon from '@assets/svg/person.svg';
import LayoutLeftIcon from '@assets/svg/layout-left.svg';
import PowerIcon from '@assets/svg/power.svg';
import st from './styles.module.scss';

type TProps = {
  onOpenUsers: () => void;
  onDesk: () => void;
};

const ICON_SIZE = { width: '36px', height: '36px' };

export const Actions = ({ onOpenUsers, onDesk }: TProps) => {
  return (
    <>
      <ToggleIcon withDots={true} Icon={<FilmIcon {...ICON_SIZE} />} />
      <ToggleIcon withDots={true} Icon={<MicrophoneIcon {...ICON_SIZE} />} />
      <ToggleIcon Icon={<LaptopIcon {...ICON_SIZE} />} />
      <ToggleIcon Icon={<ChatIcon {...ICON_SIZE} />} />
      <ToggleIcon withDots={true} Icon={<PanIcon {...ICON_SIZE} />} />
      <ToggleIcon onClick={onOpenUsers} Icon={<PersonIcon {...ICON_SIZE} />} />
      <ToggleIcon Icon={<LayoutLeftIcon {...ICON_SIZE} />} />
      <ToggleIcon Icon={<PowerIcon {...ICON_SIZE} />} />

      <ToggleIcon
        Tooltip={<DotsTooltip onDesk={onDesk} />}
        className={st.dots}
        Icon={<Dots direction={DotsDirection.HORIZONTAL} />}
      />
    </>
  );
};
