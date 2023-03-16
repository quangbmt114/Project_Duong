import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Slider from "react-slick";

export default class MultipleItems extends Component {
    
  render() {
   const SampleNextArrow= (props)=> {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, background: "black",borderRadius:15 }}
            onClick={onClick}
          />
        );
      }
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      background:"black",
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow:<SampleNextArrow/>,
      prevArrow:<SampleNextArrow/>
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Card style={{border:"0px"}} >
                <Card.Body className=" p-lg-17 pb-lg-0" >
                <img src="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg" width={"100%"}/>
                </Card.Body>
            </Card>
            
          </div>
          <div>
          <Card style={{border:"0px"}} >
                <Card.Body className=" p-lg-17 pb-lg-0" >
                <img src="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg" width={"100%"}/>
                </Card.Body>
            </Card>
          </div>
          <div>
          <Card style={{border:"0px"}} >
                <Card.Body className=" p-lg-17 pb-lg-0" >
                <img src="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg" width={"100%"}/>
                </Card.Body>
            </Card>
          </div>
          <div>
          <img src="https://lptech.asia/uploads/files/2020/07/10/seo-hinh-anh-la-gi-lptech.png" width={"100%"}/>
          </div>
          <div>
          <img src="https://lptech.asia/uploads/files/2020/07/10/seo-hinh-anh-la-gi-lptech.png" width={"100%"}/>
          </div>
          <div>
          <img src="https://lptech.asia/uploads/files/2020/07/10/seo-hinh-anh-la-gi-lptech.png" width={"100%"}/>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
}