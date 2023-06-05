import S from './style.module.scss';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  title: string;
}

export function Button({ type, title, onClick }: ButtonProps) {
  return (
    <>
      <button onClick={onClick} type={type} className={S.button}>
        {title}
      </button>
    </>
  );
}
