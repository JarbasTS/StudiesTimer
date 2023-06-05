export function timeConverter(tempo: string) {
  const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(':');

  const horasToSegundos = Number(horas) * 3600;
  const minutosToSegundos = Number(minutos) * 60;

  return horasToSegundos + minutosToSegundos + Number(segundos);
}
