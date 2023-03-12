import { Tooltip } from "./tooltip";
import st from "./styles.scss";

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
