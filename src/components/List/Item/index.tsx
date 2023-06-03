import S from '../style.module.scss';

export function Item({ tarefa, tempo }: { tarefa: string; tempo: string }) {
  return (
    <li className={S.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
