import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends Component {
  renderSubmit(value) {
    return value === "english" ? "Submit" : "प्रस्तुत";
  }

  render() {
    return (
      <ColorContext.Consumer>
        {colorValue => (
          <button className={`ui button ${colorValue}`}>
            <LanguageContext.Consumer>
              {value => this.renderSubmit(value)}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
