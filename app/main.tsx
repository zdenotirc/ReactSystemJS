'use strict';

import * as React from 'react';
import * as ReactDom from 'react-dom';
import Home from './components/homePage';

class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Home />
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);
