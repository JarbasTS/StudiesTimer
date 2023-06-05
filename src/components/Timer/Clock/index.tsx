import S from './style.module.scss';

interface Props {
  time: number | undefined;
}

export function Clock({ time = 0 }: Props) {
  const m = Math.floor(time / 60);
  const s = time % 60;

  const [mDezena, mUnidade] = String(m).padStart(2, '0');
  const [sDezena, sUnidade] = String(s).padStart(2, '0');

  return (
    <>
      <span className={S.clockNumero}>{mDezena}</span>
      <span className={S.clockNumero}>{mUnidade}</span>
      <span className={S.clockDivisao}>:</span>
      <span className={S.clockNumero}>{sDezena}</span>
      <span className={S.clockNumero}>{sUnidade}</span>
    </>
  );
}
