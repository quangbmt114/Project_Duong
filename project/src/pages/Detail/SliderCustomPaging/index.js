import React, { useState, useRef ,useEffect} from "react";
import { Spinner } from "react-bootstrap";
import Slider from "react-slick";

const SliderCustomPaging = ({ images }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
  }, [images]);
  if (!images) {
    return (
      <div className="waitting">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }else if(images.length==1){
    return (
      <div>
        <Slider asNavFor={nav2} ref={slider1Ref}>
          {images.map((items, index) => {
            return (
              <div key={index+1}>
                <img
                  src={items}
                  style={{ width: "100%", height: 500, objectFit: "cover" }}
                  alt="hình slider-lớn"
                />
              </div>
            );
          })}
        </Slider>
       
      </div>
    );
  } 
  else {
    return (
      <div>
        <Slider asNavFor={nav2} ref={slider1Ref}>
          {images.map((items, index) => {
            return (
              <div key={index+1}>
                <img
                  src={items}
                  style={{ width: "100%", height: 500, objectFit: "cover" }}
                  alt="hình slider-lớn"
                />
              </div>
            );
          })}
        </Slider>
        <Slider
          asNavFor={nav1}
          ref={slider2Ref}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {images.map((items, index) => {
            return (
              <div key={index+1}>
                <img
                  src={items}
                  style={{ width: "100%", height: 200, objectFit: "cover" }}
                  alt="hình slider-nhỏ"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
};

export default SliderCustomPaging;
