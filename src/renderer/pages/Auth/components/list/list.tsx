import st from './styles.module.scss';
import BinIcon from '@assets/svg/bin.svg';
import { Blur } from '@features';
import dayjs from 'dayjs';
import { useHistory } from 'react-router-dom';

type TProps = {
  list: { id: number; name: string; date: string }[];
  removeItem: any;
};

export function List({ list, removeItem }: TProps) {
  const history = useHistory();

  return (
    <ul className={st.list}>
      {list?.map((item) => (
        <li key={item.id}>
          <Blur className={st.listBlur} />
          <div
            className={st.wrapper}
            onClick={() => history.push(`/conference/${item.name}`)}
          >
            <span className={st.listName}>{item.name}</span>
            <span className={st.listDate}>
              {dayjs(item.date).format('DD/MM/YYYY')}
            </span>{' '}
          </div>
          <BinIcon onClick={() => removeItem(item.id)} />
        </li>
      ))}
    </ul>
  );
}
