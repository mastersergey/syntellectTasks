import { observer } from 'mobx-react-lite';
import React, { FC, useEffect, useState } from 'react';
import Control from '../../components/control/control';
import AutocomplitStore from '../../store/autocomplit-store';

import './autocomplit-control.css';

interface AutocomplitControlProps {
  maxHints?: number;
}

const AutocomplitControl: FC<AutocomplitControlProps> = observer(({ maxHints }) => {
  const [store] = useState(() => new AutocomplitStore());

  return (
    <div>
      <Control store={store} />
      <AutocomplitHints store={store} maxHints={maxHints} />
    </div>
  );
});

const AutocomplitHints = observer(
  ({ store, maxHints }: { store: AutocomplitStore; maxHints?: number }) => {
    useEffect(() => {
      store.loadHints(store.inputValue, maxHints);
    }, [store.inputValue]);

    return (
      <ul>
        {store.hints?.map((item) => (
          <li onClick={() => store.changeInput(item.fullName)} key={item.name}>
            <h4>{`${item.name}, ${item.fullName}`}</h4>
            <img src={item.flag} alt={'flag'} />
          </li>
        ))}
      </ul>
    );
  },
);

export default AutocomplitControl;
