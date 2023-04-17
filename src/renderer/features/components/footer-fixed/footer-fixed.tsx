import st from './styles.module.scss';
import cn from 'classnames';
import { Container } from '../container';
import { Actions, DeskActions } from './ui';

type TProps = {
  isFullScreen?: boolean;
  onOpenUsers: () => void;
  isDesk: boolean;
  onDesk: () => void;
};

export const FooterFixed = ({
  isFullScreen,
  onOpenUsers,
  isDesk,
  onDesk,
}: TProps) => {
  return (
    <footer
      className={cn(
        st.footer,
        { [st.fullscreen]: isFullScreen },
        { [st.desk]: isDesk }
      )}
    >
      <Container>
        {isDesk ? (
          <DeskActions onDesk={onDesk} />
        ) : (
          <Actions onDesk={onDesk} onOpenUsers={onOpenUsers} />
        )}
      </Container>
    </footer>
  );
};
