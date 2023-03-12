import st from "./styles.scss";

export const Container: React.FC = ({ children }) => {
  return <div className={st.container}>{children}</div>;
};
