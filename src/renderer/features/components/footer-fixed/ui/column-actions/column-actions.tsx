import CursorIcon from '@assets/svg/cursor.svg';
import PanIcon from '@assets/svg/pan.svg';
import st from './styles.module.scss';

export const ColumnActions = () => {
  return (
    <div className={st.columnActions}>
      <div>
        <CursorIcon width="54px" height="54px" />
      </div>
      <div>
        <PanIcon width="40px" height="40px" />
      </div>
    </div>
  );
};
