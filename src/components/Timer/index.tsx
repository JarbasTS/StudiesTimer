import { Button } from '../Button';
import { Clock } from './Clock';
import S from './style.module.scss';

export function Timer() {
  return (
    <div className={S.timer}>
      <p className={S.title}>Escolha um card e inicie o cronômetro</p>
      <div className={S.clockWrapper}>
        <Clock />
      </div>
      <Button title="Iniciar" />
    </div>
  );
}
