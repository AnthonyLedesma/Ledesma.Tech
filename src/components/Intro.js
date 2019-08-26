import React from 'react';


class Intro extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"};
      }

    render() {
        return <div class="intro-component">{this.props.text}</div>;
    }
} 

export default Intro;