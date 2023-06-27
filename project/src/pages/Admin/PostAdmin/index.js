import React, { useState } from "react";
import { Card, Row, Form, Button, Col, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faToilet, faVectorSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Posts({ posts, onLoad }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    image:"",
    images:[],
    district: "",
    area: 0,
    bedroom: 0,
    toilet: 0,
    price: 0,
    check: true,
  });
  const [id, setId] = useState(0);
  const [postData, setPostData] = useState([]);

  const handleShowModal = async (postId) => {
    setShowModal(true);
    setId(postId);
    const response = await axios.get(`${process.env.REACT_APP_API}/post/${postId}`);
    const { title, address,image,images, district, area, bedroom, toilet, price } = response.data;
    setFormData({ title, address,image,images, district, area, bedroom, toilet, price, check: true });
  };

  const handleFormChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleCloseModal = async () => {
    const response = await axios.patch(`${process.env.REACT_APP_API}/post/${id}`, formData);
    console.log(response.data);
    onLoad(id);
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleDeletePost = async (postId) => {
    const response = await axios.delete(`${process.env.REACT_APP_API}/post/${postId}`);
    if (response) {
      alert("Xóa thành công");
      onLoad(postId);
    }
  };

  return (
    <Row>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cập nhật Phòng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" value={formData.title} onChange={handleFormChange} />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" name="address" value={formData.address} onChange={handleFormChange} />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Hình ảnh đại diện</Form.Label>
              <Form.Control type="text" name="image" value={formData.image} onChange={handleFormChange} />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Hình ảnh thêm của phòng</Form.Label>
              <Form.Control as="textarea" rows={4} name="images" value={formData.images} onChange={handleFormChange} />
            </Form.Group>
            <Form.Group controlId="formDistrict">
              <Form.Label>District</Form.Label>
              <Form.Control type="text" name="district" value={formData.district} onChange={handleFormChange} />
            </Form.Group>

            <Form.Group controlId="formArea">
              <Form.Label>Diện Tích</Form.Label>
              <Form.Control type="number" name="area" value={formData.area} onChange={handleFormChange} />
            </Form.Group>

            <Form.Group controlId="formBedroom">
              <Form.Label>Bedroom</Form.Label>
              <Form.Control type="number" name="bedroom" value={formData.bedroom} onChange={handleFormChange} />
            </Form.Group>

            <Form.Group controlId="formToilet">
              <Form.Label>Toilet</Form.Label>
              <Form.Control type="number" name="toilet" value={formData.toilet} onChange={handleFormChange} />
            </Form.Group>

            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" name="price" value={formData.price} onChange={handleFormChange} />
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

      {posts.map((item, index) => (
        <Col md="4" key={index}>
          <Card border="0">
            <Card.Img
              variant="top"
              style={{ height: 270, objectFit: "cover" }}
              className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-225px"
              src={item.image}
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text className="fw-bold-500">{item.address}</Card.Text>
              <Card.Text className="fw-bold-500 fs-5 text-gray-600 text-dark mt-3">
                <span style={{ marginRight: 10 }}>
                  <FontAwesomeIcon icon={faVectorSquare} /> {item.area}M²
                </span>
                <span style={{ marginRight: 10 }}>
                  <FontAwesomeIcon icon={faBed} /> {item.bedroom} Phòng ngủ
                </span>
                <span style={{ marginRight: 10 }}>
                  <FontAwesomeIcon icon={faToilet} /> {item.toilet} Toilet
                </span>
              </Card.Text>
              <div className="fs-4 mt-4 d-flex flex-stack">
                <div className="badge border-dashed fs-2 fw-bolder text-dark p-2">
                  <span style={{ fontSize: 16, position: "relative", top: -3 }}>Chỉ từ</span> {item.price}
                </div>
                <div>
                  <Button variant="danger" style={{ marginRight: 10 }} onClick={() => handleDeletePost(item.id)}>
                    Xóa
                  </Button>
                  <Button variant="info" onClick={() => handleShowModal(item.id)}>
                    Sửa
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Posts;
