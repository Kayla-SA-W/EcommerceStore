import React from 'react';
import { Provider } from "react-redux"
import {store as createStore} from "./src/redux"

const App = ({ element }) => {
    const store = createStore();
    return (
        <Provider store={store}>
            {element}
        </Provider>
    )
};

export const wrapRootElement = ({ element }) => <App element={element} />;



