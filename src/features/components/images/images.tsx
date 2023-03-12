import Image1 from "@assets/images/image1.png";
import BackgroundIcon from "@assets/svg/background.svg";
import { Blur } from "@features";
import st from "./styles.scss";

type TProps = {
  withNotebook?: boolean;
};

export const Images = ({ withNotebook }: TProps) => {
  return (
    <>
      {withNotebook && (
        <>
          <div className={st.server}>
            <Blur className={st.serverBlur} />
            <span>Сервер Videocontour</span>
          </div>
          <img src={Image1} className={st.image1} alt="Видео Контур" />
        </>
      )}
      <BackgroundIcon className={st.icon} />
    </>
  );
};
