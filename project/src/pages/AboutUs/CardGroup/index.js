import { Card, Row, Col } from 'react-bootstrap';


function CardGroups() {
    return (
        <Card style={{border:0}} >
            <Card.Body>
                <Row>
                    <Col md={4} >
                        <Card style={{ width: '100%',border:0 }}>
                            <Card.Img variant="top" src="/images/3.png" className="hover-img" height={400}/>
                            <Card.Body>
                                <Card.Title>Đa Dạng Trị Ví & Sản Phẩm</Card.Title>
                                <Card.Text>
                                Beland không xây dựng một Bất động sản số 1 mà kiến tạo ngôi nhà thứ 2 đầy cảm hứng và mạch sống phù hợp
                                 nhất cho thế hệ hiện đại, nơi họ an tâm an cư và lạc nghiệp.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '100%',border:0 }}>
                            <Card.Img variant="top" src="/images/3.png" className="hover-img"/>
                            <Card.Body>
                                <Card.Title>Uy Tín Tạo Niềm Tin</Card.Title>
                                <Card.Text>
                                Điều sống còn duy nhất của Beland chính là Uy Tín, bảo vệ đến cùng những cam kết của mình bằng hành
                                 động và kết quả cho Chủ đầu tư, đối tác và khách hàng.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '100%',border:0 }}>
                            <Card.Img variant="top" src="/images/3.png" className="hover-img"/>
                            <Card.Body>
                                <Card.Title>Kiến Tạo Cảm Hứng Sống</Card.Title>
                                <Card.Text>
                                Gần 1000 phòng khắp 6 quận Sài Gòn, bạn dễ dàng chọn vị trí ưng ý cũng như luân chuyển 
                                trong quá trình. Beland còn có nhiều loại phòng, diện tích và nhiều mức giá giúp bạn lựa chọn một căn phòng phù hợp.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default CardGroups;