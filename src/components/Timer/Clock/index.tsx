import S from './style.module.scss';

export function Clock() {
  return (
    <>
      <span className={S.clockNumero}>0</span>
      <span className={S.clockNumero}>0</span>
      <span className={S.clockDivisao}>:</span>
      <span className={S.clockNumero}>0</span>
      <span className={S.clockNumero}>0</span>
    </>
  );
}
