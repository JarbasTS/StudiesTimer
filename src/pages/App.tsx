import { useState } from 'react';
import { Form } from '../components/Form';
import { List } from '../components/List';
import { Timer } from '../components/Timer';
import S from './style.module.scss';
import { ITarefa } from '../types/tarefa';

export default function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([
    {
      tarefa: 'React',
      tempo: '01:30:00'
    },
    {
      tarefa: 'Next',
      tempo: '01:00:00'
    },
    {
      tarefa: 'Node',
      tempo: '00:30:00'
    }
  ]);
  console.log(tarefas);

  return (
    <div className={S.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} />
      <Timer />
    </div>
  );
}
