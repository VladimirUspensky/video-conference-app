import { Tooltip } from './tooltip';
import st from './styles.module.scss';

export const BackgroundTooltip = () => {
  return (
    <Tooltip
      classNameWrapper={st.backgroundTooltipWrapper}
      className={st.backgroundTooltip}
    >
      <span>Изменить фон</span>
    </Tooltip>
  );
};
