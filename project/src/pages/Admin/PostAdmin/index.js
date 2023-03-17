import { Card,Button,Col,Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed,faToilet,faVectorSquare } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import axios from "axios";
function Posts({ posts,onLoad}) {

return(
   <Row>
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
                      const response = await axios.delete(`http://localhost:3000/post/${items.id}`
                       
                      );
                      if (response) {
                        alert("delete successfully");
                        onLoad(items.id);
                      }
                    }}
                  >Xóa</Button>
                  <Button variant="info">Sửa</Button>
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
