import { useState } from 'react';
import { Button } from '../Button';
import S from './style.module.scss';
import { ITarefa } from '../../types/tarefa';
import { v4 as uuidv4 } from 'uuid';

export function Form({
  setTarefas
}: {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}) {
  const [data, setData] = useState<ITarefa>({
    tarefa: '',
    tempo: '00:00:00'
  });

  function addTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTarefas(tarefasAntigas => [
      ...tarefasAntigas,
      { ...data, selected: false, completed: false, id: uuidv4() }
    ]);

    setData({
      tarefa: '',
      tempo: '00:00:00'
    });
  }

  return (
    <form className={S.newTarefa} onSubmit={addTarefa}>
      <div className={S.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          value={data.tarefa}
          onChange={evento => setData({ ...data, tarefa: evento.target.value })}
          id="tarefa"
          placeholder="O que você quer estudar ?"
        />
      </div>
      <div className={S.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={data.tempo}
          onChange={evento => setData({ ...data, tempo: evento.target.value })}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit" title="Adicionar" />
    </form>
  );
}
