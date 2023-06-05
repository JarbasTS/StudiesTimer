import { useEffect, useState } from 'react';
import { timeConverter } from '../../common/utils/time';
import { ITarefa } from '../../types/tarefa';
import { Button } from '../Button';
import { Clock } from './Clock';
import S from './style.module.scss';

interface Props {
  selected: ITarefa | undefined;
  endTarefa: () => void;
}

export function Timer({ selected, endTarefa }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.tempo) {
      setTime(timeConverter(selected.tempo));
    }
  }, [selected]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTime(contador - 1);
        regressiva(contador - 1);
      }
      endTarefa();
    }, 1000);
  }

  return (
    <div className={S.timer}>
      <p className={S.title}>Escolha um card e inicie o cronômetro</p>
      <div className={S.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button title="Iniciar" onClick={() => regressiva(time)} />
    </div>
  );
}
