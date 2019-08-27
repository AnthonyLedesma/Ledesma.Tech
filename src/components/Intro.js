import React from 'react';

import metadata from '../resume.json';

class Intro extends React.Component {
	constructor() {
		super();
		this.state = { color: metadata.colors.intro };
	}

	render() {
		return <div style={ { backgroundColor: this.state.color } } className="intro-component">{ this.props.text }</div>;
	}
} 

export default Intro;
