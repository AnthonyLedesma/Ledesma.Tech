import React from 'react';

import metadata from '../resume.json';

class Bio extends React.Component {
	constructor() {
		super();
		this.state = { color: metadata.colors.bio };
	}

	render() {
		return <div style={ { backgroundColor: this.state.color } } className="bio-component">{ this.props.text }</div>;
	}
} 

export default Bio;
