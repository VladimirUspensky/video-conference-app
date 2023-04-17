import { Tooltip } from './tooltip';
import st from './styles.module.scss';
import { DotsTooltipItem } from './ui';
import PersonAddIcon from '@assets/svg/person-add.svg';
import ControlIcon from '@assets/svg/control.svg';
import ShieldIcon from '@assets/svg/shield.svg';
import RadioIcon from '@assets/svg/radio.svg';
import LanguageIcon from '@assets/svg/language.svg';
import MicrophoneOffIcon from '@assets/svg/microphone-off.svg';
import FilmOffIcon from '@assets/svg/film-off.svg';
import TubeIcon from '@assets/svg/tube.svg';
import VolumeIcon from '@assets/svg/volume.svg';
import WindowIcon from '@assets/svg/window.svg';
import ImageIcon from '@assets/svg/image1.svg';
import ChartIcon from '@assets/svg/chat.svg';
import DialpadIcon from '@assets/svg/dialpad.svg';
import CodeIcon from '@assets/svg/code.svg';

const ICON_SIZE = { width: '24px', height: '24px' };

const TOOLTIP_ITEMS = [
  { id: 1, icon: <PersonAddIcon {...ICON_SIZE} />, text: 'Пригласить' },
  { id: 2, icon: <ControlIcon {...ICON_SIZE} />, text: 'Производительность' },
  { id: 3, icon: <ShieldIcon {...ICON_SIZE} />, text: 'Безопасность' },
  { id: 4, icon: <RadioIcon {...ICON_SIZE} />, text: 'Начать запись' },
  { id: 5, icon: <LanguageIcon {...ICON_SIZE} />, text: 'Начать трансляцию' },
  {
    id: 6,
    icon: <MicrophoneOffIcon {...ICON_SIZE} />,
    text: 'Выкл микрофон у всех',
  },
  { id: 7, icon: <FilmOffIcon {...ICON_SIZE} />, text: 'Выкл камеру у всех' },
  { id: 8, icon: <TubeIcon {...ICON_SIZE} />, text: 'YouTube' },
  { id: 9, icon: <VolumeIcon {...ICON_SIZE} />, text: 'Дать доступ к звуку' },
  { id: 10, icon: <WindowIcon {...ICON_SIZE} />, text: 'Онлайн доска' },
  { id: 11, icon: <ImageIcon {...ICON_SIZE} />, text: 'Фоновое изображение' },
  { id: 12, icon: <ChartIcon {...ICON_SIZE} />, text: 'Статистика' },
  { id: 13, icon: <ControlIcon {...ICON_SIZE} />, text: 'Настройки' },
  { id: 14, icon: <DialpadIcon {...ICON_SIZE} />, text: 'Горячие клавиши' },
  { id: 15, icon: <CodeIcon {...ICON_SIZE} />, text: 'Встроить встречу' },
];

type TProps = {
  onDesk: () => void;
};

export const DotsTooltip = ({ onDesk }: TProps) => {
  return (
    <Tooltip
      classNameWrapper={st.dotsTooltipWrapper}
      className={st.dotsTooltip}
    >
      {TOOLTIP_ITEMS.map((item) => (
        <DotsTooltipItem
          onClick={item.id === 10 ? onDesk : undefined}
          key={item.id}
          Icon={item.icon}
          text={item.text}
        />
      ))}
    </Tooltip>
  );
};
