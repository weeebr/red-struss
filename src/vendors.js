import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class SlickSlider extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  prev() {
    this.slider.slickPrev();
  }

  render() {
    const props = this.props;
    return (
      <>
        <Slider ref={c => (this.slider = c)} {...props}>
          {props.children}
        </Slider>
      </>
    );
  }
}
