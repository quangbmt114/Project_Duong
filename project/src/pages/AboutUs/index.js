import { Card, Container,Row,Col } from "react-bootstrap";
import Content_body from "./Content_body";
import CardSlider from "./CardSlider"
import './index.css'
function AboutUs() {
    return (
    <div className="wrapper" style={{ paddingTop: 30 }}>
        <Container fluid >
            <Card style={{border:0}}>
                <Card.Body className="p-lg-17 pb-lg-0">
                    <Row>
                        <Col lg="12">
                            <Row>
                                <h3 className="fs-2hx text-dark mb-5">Về Chúng Tôi</h3>
                                <Row className="d-flex qr-aubout-us">
                                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                                    <img src="/images/Logo.png" style={{maxWidth:"90%", objectFit:"contain"}} />
                                </div>
                                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                                    <div className="text-gray-700 fs-4 fw-bold-500 qr-text-justify" style={{fontWeight:500}}>
                                    Với uy tín làm trọng tâm, sự thấu hiểu sâu sắc thị trường cùng nền tảng hệ thống quản lý, vận hành bài bản & hiệu quả,
                                     chúng tôi luôn ý thức không chỉ xây dựng những giải pháp an cư tiện nghi mà còn gia tăng giá trị bền vững cho các bất động sản nhà ở.
                                     <br/>
                                     Bằng sự chân thành, chúng tôi tin tưởng những ngôi nhà thứ 2 mang tên Beland sẽ giúp thế hệ trẻ hiện đại khơi nguồn cảm hứng sống
                                      và trải nghiệm những dấu mốc cuộc đời trọn vẹn nhất.
                                    </div>
                                </div>
                                </Row>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
        <Content_body/>
       
			</div>

    );
}

export default AboutUs;