import { Presenter } from './Presenter';
import { useState } from 'react';

export const usePresenter = <T>(presenter: Presenter<T>) => {
    const initialState = presenter.getInitialOutput();
    const [state, setState] = useState(initialState);
    presenter.setUpdateHandler(setState);
    return state;
}
