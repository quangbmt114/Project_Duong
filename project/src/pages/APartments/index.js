import axios from "axios";
import { useState,useEffect } from "react";
import { Card, Container,Row,Form,Button,Col,Pagination } from "react-bootstrap";
import Posts from "./Posts";
function Apartments() {
    const [data,setData]= useState([])
    const itemsPerPage = 6;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
   

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
    const limitPage = 6;
       const fectBlog = async()=>{
        const dataAPI = await axios.get("http://localhost:3000/post")
        setData(dataAPI.data)
    }
    const handleSubmit =  async(event) => {
        event.preventDefault();
       const district= document.getElementById("district").value
      if(district===""){
        const dataAPI = await axios.get("http://localhost:3000/post")
        setData(dataAPI.data)
        setCurrentPage(1)
      }else{
        const dataAPI = await axios.get(`http://localhost:3000/post?district=${district} `)
        setData(dataAPI.data)
        setCurrentPage(1)
      }
      }
    const pagination = (data,page)=>{
            return (data.slice((page-1)*limitPage,page*limitPage))
    }

    useEffect(() => {
      fectBlog()
    }, []);

  if(data){
    return (<div className="wrapper" style={{ paddingTop: 30 }}>
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
            </Card>
        </Container>
    </div>);
  }
}

export default Apartments;