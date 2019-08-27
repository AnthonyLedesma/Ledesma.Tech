import React from "react";

import Zigzag from "./lib/zigzag";
import Curve from './lib/curve';
import Triangle from './lib/triangle';
import Diagnoal from './lib/diagonal';

class SVGDivider extends React.Component {
	constructor( props ) {
		super( props );
		this.state = { count: 25, color: this.props.belowColor };
	}

	getAboveColorProp = this.props.aboveColor;

	getBelowColorProp = this.props.belowColor;

	handleChange = ( key, value ) => this.setState( { [ key ]: value } );

	dividerComponent = ( style ) => {
		switch ( style ) {
			case 'zigzag':
				return ( <Zigzag
					{ ...this.state }
					style={ { position: "absolute", left: 0, bottom: 0, right: 0 } }
				/> );
			case 'curve':
				return ( <Curve
					{ ...this.state }
					style={ { position: "absolute", left: 0, bottom: 0, right: 0 } }
				/> );
			case 'triangle':
				return ( <Triangle
					{ ...this.state }
					style={ { position: "absolute", left: 0, bottom: 0, right: 0 } }
				/> );
			case 'diagnoal':
				return ( <Diagnoal
					{ ...this.state }
					style={ { position: "absolute", left: 0, bottom: 0, right: 0 } }
				/> );
		}
	}

	render() {
		const { dividerStyle } = this.props;
		const { dividerComponent } = this;
		const { getAboveColorProp, getBelowColorProp } = this;
		return (
			<div>
				<div className="demo">
					<div className="demo__preview">
						<div
							style={ {
								minHeight: 200,
								position: "relative",
								overflow: "hidden",
								backgroundColor: getAboveColorProp,
							} }
						>
							{ dividerComponent( dividerStyle ) }
						</div>
						<div style={ { backgroundColor: getBelowColorProp, padding: 16 } }></div>
					</div>
				</div>
			</div>
		);
	}
}

export default SVGDivider;
