import React from 'react';

import metadata from './resume.json';

class Intro extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"};
      }

    render() {
        return <div class="intro-component">{metadata.intro}</div>;
    }
} 

export default Intro;