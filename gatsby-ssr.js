import React, { useEffect } from 'react';
import { Provider } from "react-redux"
import { store as createStore} from "./src/redux"

const App = ({ element }) => {
    const store = createStore();
    useEffect(() => {
        if (typeof window !== 'undefined') {
            return (
                <Provider store={store}>
                        {element}
                </Provider>
            )
        }
    });

    return <div />;
};

export const wrapRootElement = ({ element }) => <App element={element} />;



