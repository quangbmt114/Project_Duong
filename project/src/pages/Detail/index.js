import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormSubmit from "./FormSubmit";
import SliderCustomPaging from "./SliderCustomPaging";
import axios from "axios";

function Detail() {
    const [data, setData] = useState([])
    const { title } = useParams()
    
    const fectBlog = async () => {
        const data = await axios.get(`http://localhost:3000/post/${title}`)
        setData(data.data)
    }
    useEffect(() => {
        fectBlog()
    }, []);
    if (data) {
        return (
            <div className="wrapper" style={{ paddingTop: 30 }}>
                <Card style={{ border: 0 }}>
                    <Container >
                        <Row>
                            <Col lg={8}>
                                <Card border="0">
                                    <SliderCustomPaging images={data.images} />
                                </Card>
                                <Card border="0">
                                    <Card.Header style={{ alignContent: "center", border: 0 }}>
                                        <Card.Title>
                                            {data.title}
                                        </Card.Title>
                                        <div className="qr-btn-sx btn btn-light-info cursor-default">Chỉ Từ {data.price}VNĐ / Tháng</div>
                                        <div className="qr-pt-sx col-12">
                                            {data.address}
                                        </div>
                                    </Card.Header>
                                    <Card.Body className="text-gray-500 fs-5">
                                        <p>
                                            Phòng trọ tiện nghi Beland Lê Văn Lương yên bình giữa Sài Gòn huyên náo. Nằm ngay trục đường lớn của Nhà Bè nên kết
                                            nối nhanh với Khu Phú Mỹ Hưng, ĐH Tôn Đức Thắng chỉ 5p.
                                        </p>
                                        <br />
                                        <p>
                                            Với kiến trúc gác lửng hiện đại, không gian rộng rãi, năng động, Beland Lê Văn Lương giúp mỗi cư dân có
                                            nơi dừng chân tại đất Sài Gòn thật sự tiện nghi, yên bình.
                                        </p>
                                        <br />
                                        TIỆN NGHI
                                        <ul style={{ lineHeight: 2 }}>

                                            <li>
                                                Cách ĐH Tôn Đức Thắng, RMIT 5-7p
                                            </li>
                                            <li>
                                                Cách Phú Mỹ Hưng 5p
                                            </li>
                                            <li>
                                                Khu vực bình yên, an ninh thật thụ
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                                <Card border="0">
                                    <Card.Body>
                                        <Row>
                                            <Col lg={4} >
                                                <Card.Body>
                                                    <div className="d-flex flex-center flex-column py-5">
                                                        <div className="symbol symbol-125px symbol-circle mb-7" >
                                                            <img style={{ objectFit: "cover" }} src="https://beland.vn/Assets/Images/Default/Account.jpg" alt="hình đại diện" />
                                                        </div>
                                                        <div className="fs-5 text-gray-800 text-hover-primary fw-bolder mb-3">
                                                            HỒ ĐẠI DƯƠNG
                                                        </div>
                                                        <Col lg={12}>
                                                            <Button variant="secondary" style={{ width: "100%" }}>
                                                                <FontAwesomeIcon icon={faPhone} /> Phone :
                                                                <br />
                                                                <span>033.6696.456 (Viettel) </span>
                                                            </Button>
                                                        </Col>
                                                        <Col lg={12} xm={12}>
                                                            <Button variant="outline-primary" style={{ width: "100%" }} >
                                                                <img src="./images/zalo-24px.png" style={{ marginRight: 5 }} alt="icon-zalo"/>
                                                                Zalo :  0336696456
                                                            </Button>
                                                        </Col>
                                                    </div>

                                                </Card.Body>
                                            </Col>
                                            <Col lg={8}>
                                                <FormSubmit />
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    </Container>
                </Card>
            </div>
        );
    }


}

export default Detail;