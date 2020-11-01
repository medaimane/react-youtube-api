import { useState } from 'react';
import { Presenter } from './Presenter';

export const usePresenter = <T>(presenter: Presenter<T>) => {
    const initialState = presenter.getInitialOutput();

    const [state, setState] = useState<T>(initialState);

    presenter.setUpdateHandler(setState);

    return {...state};
}
