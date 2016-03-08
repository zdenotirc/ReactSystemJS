'use strict';

import * as React from 'react';
import * as ReactDom from 'react-dom';
import Header from './common/header';
import About from './about/aboutPage';

class Home extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Header />
                <h1>React, SystemJS, jspm, Typescript, ES6</h1>
                <p>React website demo.</p>
                <br/>
                <About />
            </div>
        );
    }
};

export default Home;