'use strict';

import * as React from 'react';

export default class About extends React.Component<any, any> {
    render() {
        return(
            <div>
                <h1>About Technologies</h1>
                <p>This application use following technologies.</p>
                <ul>
                    <li>React</li>
                    <li>SystemJS</li>
                    <li>Node</li>
                    <li>jspm</li>
                    <li>Typescript</li>
                </ul>
            </div>
        );
    }
};