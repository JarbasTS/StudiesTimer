import { ITarefa } from '../../types/tarefa';
import { Item } from './Item/index';
import S from './style.module.scss';

export function List({ tarefas }: { tarefas: ITarefa[] }) {
  return (
    <aside className={S.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas?.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}
