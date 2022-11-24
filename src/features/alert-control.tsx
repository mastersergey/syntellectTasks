import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';
import Button from '../components/button/button';
import Control from '../components/control/control';
import AlertStore from '../store/alert-store';

const AlertControl: FC = observer(() => {
  const [store] = useState(() => new AlertStore());

  return (
    <Control
      buttonsLeft={[
        <Button key={'number'} onClick={() => store.alertNumber()}>
          Alert Number
        </Button>,
      ]}
      buttonsRight={[
        <Button key={'everything'} onClick={() => store.alertValue()}>
          Alert Everything
        </Button>,
      ]}
      store={store}
    />
  );
});

export default AlertControl;
