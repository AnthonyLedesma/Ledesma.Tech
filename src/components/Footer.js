import React from 'react';

import metadata from './resume.json';

class Intro extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"};
      }

    render() {
        return <div class="footer-component">{metadata.footer}</div>;
    }
} 

export default Intro;