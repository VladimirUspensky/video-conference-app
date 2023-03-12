import PeopleIcon from "@assets/svg/people.svg";
import MaskIcon from "@assets/svg/mask1.svg";
import ContrastIcon from "@assets/svg/contrast.svg";
import ControlIcon from "@assets/svg/control.svg";
import CelluarIcon from "@assets/svg/celluar.svg";
import EyeCrossedIcon from "@assets/svg/eye-crossed.svg";
import SwapIcon from "@assets/svg/swap.svg";
import MuteIcon from "@assets/svg/mute.svg";
import { BackgroundTooltip, ToggleIcon } from "@features";
import st from "./styles.scss";

const ICON_SIZE = { width: "36px", height: "36px" };

export const DeskActions = () => {
  const handleChangeBackground = () => {
    document.body.style.background === "rgb(1, 88, 105)"
      ? (document.body.style.background = "#ffffff")
      : (document.body.style.background = "#015869");
  };

  return (
    <>
      <ToggleIcon Icon={<PeopleIcon {...ICON_SIZE} />} />
      <ToggleIcon Icon={<MaskIcon {...ICON_SIZE} />} />
      <ToggleIcon
        onClick={handleChangeBackground}
        Tooltip={<BackgroundTooltip />}
        Icon={<ContrastIcon {...ICON_SIZE} />}
      />
      <ToggleIcon
        className={st.marginLeft}
        Icon={<ControlIcon {...ICON_SIZE} />}
      />
      <ToggleIcon Icon={<CelluarIcon {...ICON_SIZE} />} />
      <ToggleIcon Icon={<EyeCrossedIcon {...ICON_SIZE} />} />
      <ToggleIcon Icon={<SwapIcon {...ICON_SIZE} />} />
      <ToggleIcon Icon={<MuteIcon {...ICON_SIZE} />} />
    </>
  );
};
