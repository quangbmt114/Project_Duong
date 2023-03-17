import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, Container, Row, Form, Button, Col, Pagination,Modal } from "react-bootstrap";
import Posts from "../Admin/PostAdmin";
function ManagerCards() {
    const [dataCheck, setDataCheck] = useState([]);
    const token = JSON.stringify(localStorage.getItem("token"));
    const token1 = token.replace(/[^a-zA-Z0-9]/g, "");
    const [post, setPost] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '' });
    // data phân trang
    const itemsPerPage = 6;
    const totalPages = Math.ceil(post.length / itemsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        
      };
    const [update, setUpdate] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    // check tìm kiếm
    const handleSubmit = async (event) => {
        event.preventDefault();
        const district = document.getElementById("district").value
        if (district === "") {
            const dataAPI = await axios.get("http://localhost:3000/post")
            setPost(dataAPI.data)
            setCurrentPage(1)
        } else {
            const dataAPI = await axios.get(`http://localhost:3000/post?district=${district} `)
            setPost(dataAPI.data)
            setCurrentPage(1)
        }
    }
    // loading khi xóa
    const handleReload = (id) => {
        setUpdate(id)
        const updatePost = post.filter((post) => post.id !== id);
        setPost(updatePost);
    };
    // tìm kiếm token khi đăng nhập
    const fectBlog = async () => {
        try {
            const data1 = await axios.get(`http://localhost:3000/dataToken?token=${token1}`);
            const data = await axios.get(`http://localhost:3000/post`);
            setPost(data.data);
            setDataCheck(data1.data);
        } catch (error) {
            console.log(error);
        }
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
    //form Create data
    const handleCloseModal = () => {
        // Xử lý dữ liệu nhập vào form ở đây
        console.log(formData);

        // Đóng modal
        setShowModal(false);
    };

    const handleShowModal = () => {
        // Mở modal
        setShowModal(true);
        console.log(123);
    };

    const handleFormChange = (event) => {
        // Cập nhật dữ liệu nhập vào form
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    useEffect(() => {
        fectBlog();
    }, []);
    // tạo phân trang
    if (!dataCheck) {
        return null;
    } const limitPage = 6;
    const pagination = (post, page) => {
        return (post.slice((page - 1) * limitPage, page * limitPage))
    }
    const time = new Date().getTime();
    let count = 0;
    dataCheck.map((items) => {
        if (token1 === items.token && time <= items.timetoken) {
            count++;
        }
    });

    if (count > 0) {
       
        return (
            <div className="wrapper" style={{ marginTop: 50 }}>
             <>
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Modal Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={formData.name} onChange={handleFormChange} />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={formData.email} onChange={handleFormChange} />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={formData.email} onChange={handleFormChange} />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={formData.email} onChange={handleFormChange} />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={formData.email} onChange={handleFormChange} />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={formData.email} onChange={handleFormChange} />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={formData.email} onChange={handleFormChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>

                <Button variant="primary" onClick={handleCloseModal}>
                    Save Changes
                </Button>
            </Modal.Footer>
            </Modal>
            </>
                <Container fluid>
                    <Card style={{ border: 0 }}>
                        <Card.Body>
                            <div className="md-5" style={{ marginBottom: 20 }}>
                                <h3 className="fs-2hx text-dark mb-5 fw-bold" style={{ textAlign: "center" }}>Căn Hộ Dịch Vụ DHome</h3>
                                <Row >
                                    <Form onSubmit={handleSubmit}>
                                        <div className="row d-flex justify-content-center fv-plugins-bootstrap5 fv-plugins-framework">
                                            <div className="col-12 mb-2 col-md-3 mb-md-0 col-lg-2">
                                                <Form.Select aria-label="Default select example" id="district">
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
                            <Button variant="primary" onClick={handleShowModal}>
            Thêm Data
        </Button>
                            <Posts
                                posts={pagination(post, currentPage)}
                                onLoad={handleReload}
                            />
                        </Card.Body>
                        <Card.Body>
                            <Row>
                                <Col>
                                <Pagination>{pages}</Pagination>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        );
    } else {
        navigate("/admin");
    }
}

export default ManagerCards;
