import { useState } from 'react';
import { Form } from '../components/Form';
import { List } from '../components/List';
import { Timer } from '../components/Timer';
import S from './style.module.scss';
import { ITarefa } from '../types/tarefa';

export default function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selected, setSelected] = useState<ITarefa>();

  function selectTarefa(tarefaSelected: ITarefa) {
    setSelected(tarefaSelected);
    setTarefas(tarefasAntigas =>
      tarefasAntigas.map(tarefas => ({
        ...tarefas,
        selected: tarefas.id === tarefaSelected.id ? true : false
      }))
    );
  }

  function endTarefa() {
    if (selected) {
      setSelected(undefined);
      setTarefas(tarefasAntigas =>
        tarefasAntigas.map(tarefa => {
          if (tarefa.id === selected.id) {
            return {
              ...tarefa,
              selected: false,
              completed: true
            };
          }
          return tarefa;
        })
      );
    }
  }

  return (
    <div className={S.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} selectTarefa={selectTarefa} />
      <Timer selected={selected} endTarefa={endTarefa} />
    </div>
  );
}
