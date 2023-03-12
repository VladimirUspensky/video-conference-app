import { Tooltip } from "./tooltip";
import st from "./styles.scss";

export const CelluarTooltip = () => {
  return (
    <Tooltip
      classNameWrapper={st.celluarTooltipWrapper}
      className={st.celluarTooltip}
    >
      <span>Связь: хорошо</span>
      <span>Битрейт: N/A</span>
      <span>Потери пакетов: N/A</span>
      <span>Разрешение: N/A</span>
    </Tooltip>
  );
};
