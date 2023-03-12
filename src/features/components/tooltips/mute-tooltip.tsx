import { Tooltip } from "./tooltip";
import st from "./styles.scss";

export const MuteTooltip = () => {
  return (
    <Tooltip
      classNameWrapper={st.muteTooltipWrapper}
      className={st.muteTooltip}
    >
      <span>Без звука</span>
    </Tooltip>
  );
};
