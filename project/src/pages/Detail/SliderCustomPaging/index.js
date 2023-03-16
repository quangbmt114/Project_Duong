import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

const AsNavFor = ({images}) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

 if(images){
  return (
    <div>
      <Slider asNavFor={nav2} ref={slider1}>
        {images.map((items,index)=>{
                return(
                  <div key={index}>
                    <img src={items} style={{width:"100%",height:500,objectFit:"cover"}}/>
                  </div>
                )
        })}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={slider2}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
      {images.map((items,index)=>{
                return(
                  <div key={index}>
                    <img src={items} style={{width:"100%",height:200,objectFit:"cover"}}/>
                  </div>
                )
        })}

      </Slider>
    </div>
  );
 }
};

export default AsNavFor;
