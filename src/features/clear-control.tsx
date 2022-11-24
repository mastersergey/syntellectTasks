import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';
import Button from '../components/button/button';
import Control from '../components/control/control';
import ClearStore from '../store/clear-store';

const ClearControl: FC = observer(() => {
  const [store] = useState(() => new ClearStore());

  return (
    <Control
      store={store}
      buttonsRight={[
        <Button key='clear' onClick={() => store.clearInput()}>
          Clear
        </Button>,
        <Button key='hello' onClick={() => store.helloInput()}>
          Hello world
        </Button>,
      ]}
    />
  );
});

export default ClearControl;
