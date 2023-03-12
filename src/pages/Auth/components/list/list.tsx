import st from "./styles.scss";
import BinIcon from "@assets/svg/bin.svg";
import { Blur } from "@features";

type TProps = {
  list: { id: number; name: string; date: string }[];
};

export const List = ({ list }: TProps) => {
  return (
    <ul className={st.list}>
      {list.map((item) => (
        <li key={item.id}>
          <Blur className={st.listBlur} />
          <span className={st.listName}>{item.name}</span>
          <span className={st.listDate}>{item.date}</span>
          <BinIcon />
        </li>
      ))}
    </ul>
  );
};
