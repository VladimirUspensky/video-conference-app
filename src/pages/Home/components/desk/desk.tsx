import st from "./styles.scss";

export const Desk = () => {
  return (
    <div className={st.desk}>
      <div className={st.deskItem}>
        <span className={st.deskItemName}>Цвет</span>
        <div className={st.deskItemColor} />
      </div>
    </div>
  );
};
