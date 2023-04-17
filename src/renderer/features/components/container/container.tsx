import st from './styles.module.scss';

export const Container: React.FC = ({ children }) => {
  return <div className={st.container}>{children}</div>;
};
