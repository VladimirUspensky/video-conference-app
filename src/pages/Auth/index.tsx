import st from "./styles.scss";
import { Button, Container, Header, Images, Input } from "@features";
import { List } from "./components";
import { useEffect } from "react";

const CONFERENCES = [
  { id: 1, name: "Название конференции", date: "15.04.2022" },
  { id: 2, name: "Название конференции", date: "15.04.2022" },
  { id: 3, name: "Название конференции", date: "15.04.2022" },
];

const Auth = () => {
  useEffect(() => {
    document.body.style.background = "#015869";
  }, []);

  return (
    <Container>
      <Header />
      <div className={st.auth}>
        <div>
          <h1 className={st.title}>Защищенная высококачественная видеосвязь</h1>
          <div className={st.conferences}>
            <Input
              placeholder="Название видеоконференции"
              Button={<Button text="Создать" />}
            />
            <List list={CONFERENCES} />
          </div>
        </div>
      </div>
      <Images withNotebook={true} />
    </Container>
  );
};

export default Auth;
