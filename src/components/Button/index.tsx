import S from './style.module.scss';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  title: string;
}

export function Button({ type, title }: ButtonProps) {
  return (
    <>
      <button type={type} className={S.button}>
        {title}
      </button>
    </>
  );
}
