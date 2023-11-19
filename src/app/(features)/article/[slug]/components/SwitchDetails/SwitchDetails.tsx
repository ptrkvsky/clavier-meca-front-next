import { SwitchItem } from '@/app/gql/graphql';
import { SwitchDetail } from '../SwitchDetail';

interface Props {
  switchItem: SwitchItem;
}

export function SwitchDetails({ switchItem }: Readonly<Props>) {
  return (
    <dl>
      {switchItem.type && (
        <SwitchDetail label={'TYPE'} value={switchItem.type} />
      )}
      <br />
      {switchItem?.distanceDactivation && (
        <>
          <SwitchDetail
            label={'DISTANCE D’ACTIVATION'}
            value={switchItem.distanceDactivation}
            unite={'mm'}
          />
          <br />
        </>
      )}
      {switchItem?.forceDactionnement && (
        <>
          <SwitchDetail
            label={`Force d'actionnement`}
            value={switchItem.forceDactionnement}
            unite={'g'}
          />
          <br />
        </>
      )}
      {switchItem.distanceTotale && (
        <>
          <SwitchDetail
            label={'Distance de voyage'}
            value={switchItem.distanceTotale}
            unite="mm"
          />
          <br />
        </>
      )}

      {switchItem?.forceMaximale && (
        <>
          <SwitchDetail
            label={'Force maximale'}
            value={switchItem.forceMaximale}
            unite={'g'}
          />
          <br />
        </>
      )}
    </dl>
  );
}
