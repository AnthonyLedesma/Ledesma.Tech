import React from 'react';


class Bio extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"};
      }

    render() {
        return <div class="bio-component">{this.props.text}</div>;
    }
} 

export default Bio;