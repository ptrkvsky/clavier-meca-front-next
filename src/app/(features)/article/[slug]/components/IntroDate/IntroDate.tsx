import { styleDate } from './IntroDate.css';

export function IntroDate({ date }: Readonly<{ date: string }>) {
  // date Formated to french format
  const dateFormated = new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return <span className={styleDate?.date}>{dateFormated}</span>;
}
