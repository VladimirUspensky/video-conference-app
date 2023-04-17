import { ToggleIcon } from '@features';
import EditIcon from '@assets/svg/edit.svg';
import SquareIcon from '@assets/svg/square.svg';
import CircleIcon from '@assets/svg/circle.svg';
import TriangleIcon from '@assets/svg/triangle.svg';
import ArrowRightIcon from '@assets/svg/arrow-right.svg';
import LineIcon from '@assets/svg/line.svg';
import TypographyIcon from '@assets/svg/typography.svg';
import ImageIcon from '@assets/svg/image.svg';
import BookIcon from '@assets/svg/book.svg';
import SaveIcon from '@assets/svg/save.svg';
import RefreshIcon from '@assets/svg/refresh.svg';
import FolerIcon from '@assets/svg/folder.svg';
import st from './styles.module.scss';
import { ColumnActions } from '../column-actions';

const ICON_SIZE = { width: '60px', height: '60px' };
const ICON_SIZE_XS = { width: '40px', height: '40px' };

type TProps = {
  onDesk: () => void;
};

export const DeskActions = ({ onDesk }: TProps) => {
  return (
    <>
      <ColumnActions />
      <ToggleIcon
        className={st.deskToggleIcon}
        Icon={<EditIcon {...ICON_SIZE} />}
      />
      <ToggleIcon
        className={st.deskToggleIcon}
        Icon={<SquareIcon {...ICON_SIZE} />}
      />
      <ToggleIcon
        className={st.deskToggleIcon}
        Icon={<CircleIcon {...ICON_SIZE} />}
      />
      <ToggleIcon
        className={st.deskToggleIcon}
        Icon={<TriangleIcon {...ICON_SIZE} />}
      />
      <ToggleIcon
        className={st.deskToggleIcon}
        Icon={<ArrowRightIcon {...ICON_SIZE} />}
      />
      <ToggleIcon
        className={st.deskToggleIcon}
        Icon={<LineIcon {...ICON_SIZE} />}
      />
      <ToggleIcon
        className={st.deskToggleIcon}
        Icon={<TypographyIcon {...ICON_SIZE} />}
      />
      <ToggleIcon
        className={st.deskToggleIcon}
        Icon={<ImageIcon {...ICON_SIZE} />}
      />
      <ToggleIcon
        className={st.deskToggleIcon}
        Icon={<BookIcon {...ICON_SIZE} />}
      />

      <ToggleIcon
        onClick={onDesk}
        className={st.marginLeft}
        Icon={<RefreshIcon {...ICON_SIZE_XS} />}
      />
      <ToggleIcon Icon={<FolerIcon {...ICON_SIZE_XS} />} />
      <ToggleIcon Icon={<SaveIcon {...ICON_SIZE_XS} />} />
    </>
  );
};
