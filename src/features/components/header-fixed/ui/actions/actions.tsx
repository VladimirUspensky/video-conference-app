import ControlIcon from "@assets/svg/control.svg";
import CelluarIcon from "@assets/svg/celluar.svg";
import EyeCrossedIcon from "@assets/svg/eye-crossed.svg";
import SwapIcon from "@assets/svg/swap.svg";
import MuteIcon from "@assets/svg/mute2.svg";
import FullScreenIcon from "@assets/svg/fullscreen.svg";
import { CelluarTooltip, MuteTooltip, ToggleIcon } from "@features";
import st from "./styles.scss";

type TProps = {
  onFullScreen: () => void;
};

const ICON_SIZE = { width: "36px", height: "36px" };

export const Actions = ({ onFullScreen }: TProps) => {
  return (
    <div className={st.actions}>
      <ToggleIcon Icon={<ControlIcon {...ICON_SIZE} />} />
      <ToggleIcon
        Tooltip={<CelluarTooltip />}
        Icon={<CelluarIcon {...ICON_SIZE} />}
      />
      <ToggleIcon Icon={<EyeCrossedIcon {...ICON_SIZE} />} />
      <ToggleIcon Icon={<SwapIcon {...ICON_SIZE} />} />
      <ToggleIcon
        Tooltip={<MuteTooltip />}
        Icon={<MuteIcon {...ICON_SIZE} />}
      />
      <ToggleIcon
        onClick={onFullScreen}
        Icon={<FullScreenIcon {...ICON_SIZE} />}
      />
    </div>
  );
};
