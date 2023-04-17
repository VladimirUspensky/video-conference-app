import {
  Button,
  ButtonTypes,
  Container,
  Header,
  Images,
  Input,
} from '@features';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Recorder from 'renderer/features/components/recorder';
import st from './styles.module.scss';
import { List } from './components';

import Recordercopy from 'renderer/features/components/recordercopy';

const CONFERENCES = [
  { id: 1, name: 'Название конференции', date: '15.04.2022' },
  { id: 2, name: 'Название конференции', date: '15.04.2022' },
  { id: 3, name: 'Название конференции', date: '15.04.2022' },
];

function Auth() {
  const history = useHistory();
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('conf'));

    if (items) {
      setList(items);
    }

    document.body.style.background = '#015869';
  }, []);

  const removeItem = (id: number) => {
    setList((list) => list.filter((i) => i.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('conf', JSON.stringify(list));
  }, [list]);

  const getConference = () => {
    if (value.length) {
      setList((l) => {
        return [...l, { name: value, date: Date.now(), id: Math.random() }];
      });
    }

    setTimeout(() => {
      history.push(`/conference/${value}`);
    }, 1000);
  };

  return (
    <Container>
      <Header />
      <div className={st.auth}>
        <div>
          <h1 className={st.title}>Защищенная высококачественная видеосвязь</h1>
          <div className={st.conferences}>
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Название видеоконференции"
              Button={
                <Button
                  type={
                    value.length ? ButtonTypes.PRIMARY : ButtonTypes.DISABLED
                  }
                  text="Создать"
                  onClick={getConference}
                />
              }
            />
            <List list={list} removeItem={removeItem} />
          </div>
        </div>
      </div>
      {/* <Recorder /> */}
      {/* <Recordercopy /> */}

      <Images withNotebook />
    </Container>
  );
}

export default Auth;
