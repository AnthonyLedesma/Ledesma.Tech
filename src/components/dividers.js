import React from 'react';

import zigzag from './lib/zigzag';

class SVGDivider extends React.Component {
    state = { ...this.props.defaultProps };
  
    handleChange = (key, value) => this.setState({ [key]: value });
  
    render() {
      const { title, Component, fields } = this.props;
      return (
        <div>
          <h2>{title}</h2>
          <div className="demo">
            <div className="demo__preview">
              <div
                style={{
                  minHeight: 200,
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <h3 style={{ color: "white", textAlign: "center", padding: 16 }}>{title} demo</h3>
                <Component {...this.state} style={{ position: "absolute", left: 0, bottom: 0, right: 0 }} />
              </div>
              <div style={{ backgroundColor: this.state.color, padding: 16 }}>
                <h3 style={{ textAlign: "center" }}>Next section</h3>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default SVGDivider;