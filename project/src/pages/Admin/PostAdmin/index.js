import { Card, Row, Form, Button, Col,Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed,faToilet,faVectorSquare } from '@fortawesome/free-solid-svg-icons';
import {useState,React} from "react";
import axios from "axios";
function Posts({ posts,onLoad}) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ title: '', address: '' ,district:'',
  area:0, bedroom:0,toilet:0,price:0,check:true
});
const [id,setId]=useState(0)
const [postData,setPostData]= useState([])
  const handleShowModal = async(x) => {
   
    // Mở modal
    setShowModal(true);
    setId(x)
    const data = await axios.get(`${process.env.REACT_APP_API}/post/${x}`)
    setFormData({ title: data.data.title, address: data.data.address 
      ,district:data.data.district,
    area:data.data.area, 
    bedroom:data.data.bedroom
    ,toilet:data.data.toilet
    ,price:data.data.price
    ,check:true})

};
const handleFormChange = (event) => {
  // Cập nhật dữ liệu nhập vào form
  setFormData({ ...formData, [event.target.name]: event.target.value });
};
  //dóng cửa sổ
  const handleClose=()=>{
    setShowModal(false);
}
  const handleCloseModal = async(event) => {
    // Xử lý dữ liệu nhập vào form ở đây
      const data = await axios.patch(`${process.env.REACT_APP_API}/post/${id}`,formData)
      console.log(data.data);
           onLoad(id)
    // Đóng modal
    setShowModal(false);
};
return(
   <Row>
   <>
        <Modal show={showModal}
         onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formTitle">
                        <Form.Label>title</Form.Label>
                        <Form.Control type="text" name="title" value={formData.title} onChange={handleFormChange} />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="address" value={formData.address} onChange={handleFormChange} />
                    </Form.Group>
                    <Form.Group controlId="formDistrict">
                        <Form.Label>district</Form.Label>
                        <Form.Control type="text" name="district" value={formData.district} onChange={handleFormChange} />
                    </Form.Group>
                    <Form.Group controlId="formArea">
                        <Form.Label>Diện Tích</Form.Label>
                        <Form.Control type="number" name="area" value={formData.area} onChange={handleFormChange} />
                    </Form.Group>
                    <Form.Group controlId="formBedroom">
                        <Form.Label>bedroom</Form.Label>
                        <Form.Control type="number" name="bedroom" value={formData.bedroom} onChange={handleFormChange} />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>toilet</Form.Label>
                        <Form.Control type="number" name="toilet" value={formData.toilet} onChange={handleFormChange} />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>price</Form.Label>
                        <Form.Control type="text" name="price" value={formData.price} onChange={handleFormChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary"
                 value={false} 
                 onClick={handleCloseModal}>
                    Close
                </Button>

                <Button variant="primary"
                value={true}
                 onClick={handleCloseModal}>
                    Save Changes
                </Button>
            </Modal.Footer>
            </Modal>
            </>
         {posts.map((items,index)=>{
        return(
          <Col md="4" key={index}>
            <Card border="0" >
              <Card.Img
                variant="top"
                style={{ height: 270, objectFit: "cover" }}
                className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-225px"
                src={items.images}
              />
              <Card.Body>
                <Card.Title>{items.title}</Card.Title>
                <Card.Text className="fw-bold-500">{items.address}</Card.Text>
                <Card.Text className="fw-bold-500 fs-5 text-gray-600 text-dark mt-3">
                  <span style={{ marginRight: 10 }}><FontAwesomeIcon icon={faVectorSquare} /> {items.area}M² </span>
                  <span style={{ marginRight: 10 }}><FontAwesomeIcon icon={faBed} /> {items.bedroom} Phòng ngủ</span>
                  <span style={{ marginRight: 10 }}><FontAwesomeIcon icon={faToilet} /> {items.toilet} toilet</span>
                </Card.Text>
                <div className="fs-4 mt-4 d-flex flex-stack">
                  <div className="badge border-dashed fs-2 fw-bolder text-dark p-2 ">
                    <span style={{ fontSize: 16, position: "relative", top: -3 }}>Chỉ từ</span> {items.price}
                  </div>
                  <div>
                  <Button variant="danger" style={{marginRight:10}}
                  onClick={async () => {
                      const response = await axios.delete(`${process.env.REACT_APP_API}/post/${items.id}`
                       
                      );
                      if (response) {
                        alert("delete successfully");
                        onLoad(items.id);
                      }
                    }}
                  >Xóa</Button>
                  <Button variant="info"
                  onClick={()=>handleShowModal(items.id)}
                  >Sửa</Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

        )
      })}
      </Row>
)
     


}

export default Posts;
