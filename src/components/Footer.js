import React from 'react';

import metadata from '../resume.json';

class Intro extends React.Component {
	constructor() {
		super();
		this.state = { color: metadata.colors.footer };
	}

	render() {
		return <div style={ { backgroundColor: this.state.color } } className="footer-component">{ this.props.text }</div>;
	}
} 

export default Intro;
