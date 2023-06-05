import { ITarefa } from '../../../types/tarefa';
import S from './style.module.scss';

interface Props extends ITarefa {
  selectTarefa: (tarefaSelected: ITarefa) => void;
}

export function Item({ tarefa, tempo, selected, completed, id, selectTarefa }: Props) {
  return (
    <li
      className={`${S.item} ${selected ? S.itemSelecionado : ''} ${
        completed ? S.itemCompletado : ''
      }`}
      onClick={() =>
        !completed &&
        selectTarefa({
          tarefa,
          tempo,
          selected,
          completed,
          id
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completed && <span className={S.concluido} aria-label="tarefa completada"></span>}
    </li>
  );
}
