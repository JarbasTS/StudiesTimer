import { ITarefa } from '../../types/tarefa';
import { Item } from './Item/index';
import S from './style.module.scss';

interface Props {
  tarefas: ITarefa[];
  selectTarefa: (tarefaSelected: ITarefa) => void;
}

export function List({ tarefas, selectTarefa }: Props) {
  return (
    <aside className={S.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas?.map(item => (
          <Item selectTarefa={selectTarefa} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}
