import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import $ from "jquery";

import "slick-carousel/slick/slick.min.js";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export function SlickSlider(props) {

  const [slider, setSlider] = useState({...props.slider});
  
  useEffect(() => {
    setSlider(props.slider);
  }, [props.slider])

  $(document).ready(function(){
    $("." + slider.element).slick(slider.options);
  });

  return (
    <div className={slider.element}>
      {props.children}
    </div>
  );

}

export function SliderElement(props) {

  return (
    <div>
      {props.children}
    </div>
  );

}

SlickSlider.propTypes = {
	element: PropTypes.string.isRequired,
	options: PropTypes.any,
	children: PropTypes.element
}

SliderElement.propTypes = {
	children: PropTypes.element
}