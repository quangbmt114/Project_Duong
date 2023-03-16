
import Carousel from 'react-bootstrap/Carousel';
import "./slider.css"
function Slider() {
  return (
    <Carousel variant="dark" className='slider-item'>
    <Carousel.Item>
      <img
        className="slider1 d-block w-100"
        src="https://beland.vn/Assets/Images/Default/BannerDemo.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 slider1 "
        src="https://beland.vn/Assets/Images/Default/DepartmentB.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 slider1 "
        src="https://beland.vn/Assets/Images/Default/DepartmentA.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

export default Slider;