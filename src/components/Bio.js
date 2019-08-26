import React from 'react';

import metadata from './resume.json';

class Bio extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"};
      }

    render() {
        return <div class="bio-component">{metadata.bio}</div>;
    }
} 

export default Bio;