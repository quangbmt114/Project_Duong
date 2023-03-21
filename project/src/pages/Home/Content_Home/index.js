import { Container, Card, Row, Col, Form, Button,Pagination } from "react-bootstrap";
import {useState,useEffect} from 'react'
import axios from "axios";
import FormExample from "./FormSubmit_Home";
import Posts from "../../APartments/Posts";
function Content_Home() {
    const [data,setData]=useState([])
    const [currentPage, setCurrentPage] = useState(1);
    //biến có tham số có sẵn
    const limitPage = 3;
    const itemsPerPage = 3;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const service =[{
            content:"Vị trí thuận tiện, di chuyển dễ dàng"
    }, {
        content:"Đảm bảo an ninh 24/7"
},{
    content:"Hỗ trợ & bảo trì kỹ thuật suốt quá trình cư trú "
},{
    content:"Đa dạng sản phẩm, linh hoạt diện tích"
},{
    content:"Phòng hiện đại, đủ ánh sáng & thông thoáng    "
},{
    content:"Giờ giấc tự do, tiện lợi công việc    "
}
]
const pagination = (data,page)=>{
    return (data.slice((page-1)*limitPage,page*limitPage))
}
const fectBlog = async()=>{
    const dataAPI = await axios.get(process.env.REACT_APP_API+"/post")
    setData(dataAPI.data)
}
// tìm kiếm phòng
const handleSubmit =  async(event) => {
    event.preventDefault();
   const district= document.getElementById("district").value
  if(district===""){
    const dataAPI = await axios.get(process.env.REACT_APP_API+"/post")
    setData(dataAPI.data)
    setCurrentPage(1)
  }else{
    const dataAPI = await axios.get(`${process.env.REACT_APP_API}/post?district=${district} `)
    setData(dataAPI.data)
    setCurrentPage(1)
  }
  }
const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
    useEffect(() => {
        fectBlog()
      }, []);
  
    return (
        //begin ContenclassName
        <Container fluid className="content-body">
            <Card style={{ border: 0, boxSizing: "border-box", padding: 30 }} >
                <Card.Body >
                    <Row >
                        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                            <img src="https://beland.vn/Assets/Demo/Building_Mockup.png" className="content-home-body-img" />
                        </div>
                        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center flex-column">
                            <div className="row w-100">
                                <h3 className="fs-2hx text-dark mb-4 align-items-start px-0" style={{ fontFamily: "revert" }}>
                                    Về Chúng Tôi</h3>
                            </div>
                            <div className="text-gray-700 fs-1.2 fw-bold qr-text-justify" style={{ color: "gray", fontFamily: "Noto Sans" }}>
                                Với uy tín làm trọng tâm,
                                sự thấu hiểu sâu sắc thị trường cùng nền tảng hệ thống quản lý,
                                vận hành bài bản &amp; hiệu quả,
                                chúng tôi luôn ý thức không chỉ xây dựng những giải pháp an cư
                                tiện nghi mà còn gia tăng giá trị bền vững cho các bất động sản
                                nhà ở.
                                <br />
                                Bằng sự chân thành, chúng tôi tin tưởng những ngôi nhà thứ 2
                                mang tên Beland sẽ giúp thế hệ trẻ hiện đại khơi nguồn cảm hứng
                                sống và trải nghiệm những dấu mốc cuộc đời trọn vẹn nhất.
                            </div>

                        </div>
                    </Row>
                </Card.Body>
                <Card.Body>
                    <div className="md-5" style={{ marginBottom: 20 }}>
                        <h3 className="fs-2hx text-dark mb-5">Căn Hộ Dịch Vụ DHome</h3>
                        <Row >
                            <Form onSubmit={handleSubmit}>
                                <div className="row d-flex justify-content-center fv-plugins-bootstrap5 fv-plugins-framework">
                                    <div className="col-12 mb-2 col-md-3 mb-md-0 col-lg-2">
                                        <Form.Select aria-label="Default select example"  id="district">
                                        <option value="">Chọn Quận</option>
                                            <option value="Quận Phú Nhuận">Quận Phú Nhuận</option>
                                            <option value="Huyện Nhà Bè">Huyện Nhà Bè</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </div>
                                    <div className="fv-row col-12 mb-2 col-md-3 mb-md-0 col-lg-2 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
                                        <Form.Control type="text" placeholder="Giá thấp nhất" />
                                    </div>
                                    <div className="fv-row col-12 mb-2 col-md-3 mb-md-0 col-lg-2 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
                                        <Form.Control type="text" placeholder="Giá cao nhất" />
                                    </div>
                                    <div className="fv-row col-12 mb-2 col-md-3 mb-md-0 col-lg-2 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid" width="100%">
                                        <Button type="submit">Tìm Kiếm</Button>
                                    </div>
                                </div>
                            </Form>
                        </Row>
                    </div>
                    <Posts
                         posts = {pagination(data,currentPage)}
                    />
                </Card.Body>
                <Card.Body>
                    <Row>
                        <Col>
                        <Pagination>{pages}</Pagination>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Body className="p-lg-17 pb-lg-0">
                    <Row>
                    <div className="col-md-4 d-flex ps-lg-10 align-items-center qr-contact-bg">
                            <img 
                            src={require("../../../images/images_1.jpg")} 
                            style={{width:"100%",height:270,objectFit:"cover"}}

                            />
                    </div>
                    <div className="col-md-8 pe-lg-10">
                        <div className="ps-4 row">
                                <h3 className="fs-2hx text-dark mb-3">
                                    Thổi Hồn Sống Cảm Ứng
                                </h3>
                                <Col lg="12" className="mb-3">
                                        <div className="fw-bold-500 fs-6 text-gray-600">    
                                        Kiến tạo nên những căn phòng đầy cảm hứng và mạch sống cho thế hệ
                                                hiện đại, nơi bạn an tâm định cư và lạc nghiệp.
                                        </div>
                                </Col>
                                {service.map((item,index)=>{
                                    return(
                                        <div className="col-6 mb-4" key={index+1}>
                                            <div className="tab-content">
                                                <div className="card-body p-0 tab-pane fade show active" role="tabpanel" aria-labelledby="kt_activity_today_tab">
                                                    <div className="timeline">
                                                        <div className="timeline-item d-flex" >
                                                            <div className="timeline-line w-40px"></div>
                                                            <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                <div className="symbol-label bg-light">
                                                                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
																	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																		<path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="black"></path>
																		<path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="black"></path>
																		<path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="black"></path>
																	</svg>
																</span>
                                                                </div>
                                                            </div>
                                                            <div className="timeline-content mb-0">
                                                                <div className="pe-3">
                                                                    <div className="fs-5 fw-bold">{item.content}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                    </Row>
                </Card.Body>
                <Card.Body>
                        <div className="card-body p-lg-17 pb-lg-0">
                            <div className="row mb-18">
                                <div className="col-12">
                                    <h3 className="fs-2hx text-dark mb-5">Hệ Thống Căn Hộ Dịch Vụ Beland</h3>
                                </div>
                                <div className="row d-flex justify-content-center qr-map-list" style={{height:600,overflow:"hidden"} }>
                                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1AY88kYxDxNEWGwZ3q3QrV8z4MmkkHas&ehbc=2E312F" width="100%" height="600px"></iframe>
                                </div>
                            </div>
                        </div>
                        </Card.Body>
                    <Card.Body className="p-lg-17 pb-lg-0">
                                <Row>
                                <div className="col-lg-6">
                                <FormExample/>
                                </div>
                                <div className="col-md-6 d-flex ps-lg-10 align-items-center" style={{paddingTop:30}}>
                                    <div className="row g-5 mb-5 mb-lg-15">
                                        <div className="col-sm-6 pe-lg-10">
                                            <div className="text-center bg-light card-rounded d-flex flex-column justify-content-center p-10 h-lg-100">
                                                <span className="svg-icon svg-icon-3tx svg-icon-primary">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
															<g clipPath="url(#clip0)">
																<path opacity="0.25" d="M21.3902 19.5804L19.4852 21.4853C19.4852 21.4853 14.5355 23.6066 7.46441 16.5356C0.39334 9.46451 2.51466 4.51476 2.51466 4.51476L4.41959 2.60983C5.28021 1.74921 6.70355 1.85036 7.43381 2.82404L9.25208 5.24841C9.84926 6.04465 9.77008 7.15884 9.06629 7.86262L7.46441 9.46451C7.46441 9.46451 7.46441 10.8787 10.2928 13.7071C13.1213 16.5356 14.5355 16.5356 14.5355 16.5356L16.1374 14.9337C16.8411 14.2299 17.9553 14.1507 18.7516 14.7479L21.1759 16.5662C22.1496 17.2964 22.2508 18.7198 21.3902 19.5804Z" fill="#191213"></path>
																<path d="M4.41959 2.60987L3.92887 3.10059L8.17151 8.75745L9.06629 7.86267C9.77007 7.15888 9.84926 6.0447 9.25208 5.24846L7.4338 2.82409C6.70354 1.85041 5.28021 1.74926 4.41959 2.60987Z" fill="#121319"></path>
																<path d="M21.3901 19.5804L20.8994 20.0711L15.2426 15.8285L16.1373 14.9337C16.8411 14.2299 17.9553 14.1507 18.7515 14.7479L21.1759 16.5662C22.1496 17.2965 22.2507 18.7198 21.3901 19.5804Z" fill="#121319"></path>
															</g>
														</svg>
													</span>
                                                        <h3 className="text-dark fw-bolder my-4">Hãy Liên Hệ Với Chúng Tôi</h3>
                                                <div className="text-gray-700 fw-bold fs-3">0908 30 1994</div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 ps-lg-10">
                                            <div className="text-center bg-light card-rounded d-flex flex-column justify-content-center p-10 h-lg-100">
                                                <span className="svg-icon svg-icon-3tx svg-icon-primary">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
															<path opacity="0.25" d="M21 10C21 15.4917 16.1746 20.1791 13.5904 22.2957C12.6534 23.0631 11.3466 23.0631 10.4096 22.2957C7.82537 20.1791 3 15.4917 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" fill="#191213"></path>
															<path d="M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z" fill="#121319"></path>
														</svg>
													</span>
                                                <h3 className="text-dark fw-bolder my-4">Hoặc Đến Trực Tiếp</h3>
                                                <div className="text-gray-700 fs-4 fw-bold" >VP Beland, 57/6I Điện Biên Phủ, Bình Thạnh , HCM</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Row>
                    </Card.Body>
            </Card>
        </Container>
    );
}

export default Content_Home;