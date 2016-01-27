'use strict';

import * as React from 'react';
import * as ReactDom from 'react-dom';

class Header extends React.Component<any, any>{
    handleClick(event: Event) {
        event.preventDefault();
        console.log('image clicked');
    }

    render() {
        let img = {};
        return (
            <div>
                <a href='/' className='custom-img' onClick={this.handleClick.bind(this)} />
            </div>
        );
    }
};

export default Header;