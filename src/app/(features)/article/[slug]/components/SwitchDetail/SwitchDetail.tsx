import { styleSwitchDetail as style } from './SwitchDetail.css';

interface PropsSwitchDetail {
  label: string;
  value: string | number;
  unite?: string;
}

export function SwitchDetail({
  label,
  value,
  unite,
}: Readonly<PropsSwitchDetail>) {
  return (
    <>
      <dt className={style.dt}>{label}</dt>
      <dd className={style.dd}>
        {value}
        {unite && <span className={style.unite}>{unite}</span>}
      </dd>
    </>
  );
}
