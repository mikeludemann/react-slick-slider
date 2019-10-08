import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from "jquery";

import "slick-carousel/slick/slick.min.js";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

class SlickSlider extends Component {

	componentDidMount(){

    let classElement = "." + this.props.element;
    let slickOptions = this.props.options;

		$(document).ready(function(){
      $(classElement).slick(slickOptions);
    });

  }

  render() {
		return (
			<div className={this.props.element}>
				{this.props.children}
      </div>
		);
	}

}

class SliderElement extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

  render() {
		return (
			<div>
				{this.props.children}
      </div>
		);
	}

}

SlickSlider.propTypes = {
	element: PropTypes.string.isRequired,
	options: PropTypes.any,
	children: PropTypes.element
}

SliderElement.propTypes = {
	children: PropTypes.element
}

export {
  SlickSlider,
  SliderElement
}