import st from './styles.module.scss';
import cn from 'classnames';

type TProps = {
  Button?: JSX.Element;
  placeholder?: string;
  className?: string;
  onChange: (e: any) => void;
  value: string;
};

export const Input = ({
  Button,
  placeholder,
  className,
  onChange,
  value,
}: TProps) => {
  return (
    <div className={cn(st.input, className)}>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
      />
      {Button && Button}
    </div>
  );
};
