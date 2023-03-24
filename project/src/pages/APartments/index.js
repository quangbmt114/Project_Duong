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
        const dataAPI = await axios.get(process.env.REACT_APP_API+"/post")
        setData(dataAPI.data)
    }
 // tìm kiếm phòng
 const handleSubmit = async (event) => {
  event.preventDefault();
  // lấy dữ liệu form district
  const district = document.getElementById("district").value
  // lấy dữ liệu form sort
  const sort = document.getElementById("sort").value
  // láy dữ liệu
  if (district === "" && sort === "") {
      const dataAPI = await axios.get(`${process.env.REACT_APP_API}/post`)
      setData(dataAPI.data)
      setCurrentPage(1)
  } 
  //tìm kiếm theo quận
   if (district !=="" && sort === "") {
      const dataAPI = await axios.get(`${process.env.REACT_APP_API}/post?district=${district} `)
      setData(dataAPI.data)
      setCurrentPage(1)
  }
  // sắp xếp giảm dần
  if(district ==="" && sort === "priceUp"){
      const dataAPI = await axios.get(`${process.env.REACT_APP_API}/post?_sort=price&_oder=asc,desc`)
      setData(dataAPI.data)
      setCurrentPage(1)
  }
  //sắp xếp tăng dần
  if(district ==="" && sort === "priceDown"){
      const dataAPI = await axios.get(`${process.env.REACT_APP_API}/post?_sort=price&_order=desc`)
      setData(dataAPI.data)
      setCurrentPage(1)
  }
  // sắp xếp giảm dần theo quận
  if(district !=="" && sort === "priceDown"){
      const dataAPI = await axios.get(`${process.env.REACT_APP_API}/post?district=${district}&_sort=price&_order=desc`);
      setData(dataAPI.data)
      setCurrentPage(1)
  }
          // sắp xếp tăng dần theo quận
  if(district !=="" && sort === "priceUp"){
      const dataAPI = await axios.get(`${process.env.REACT_APP_API}/post?district=${district}&_sort=price&_order=asc`);
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
                                        <Form.Select aria-label="Default select example" id="district" style={{height:"100%"}}>
                                            <option value="">Chọn Quận</option>
                                            <option value="Quận Phú Nhuận">Quận Phú Nhuận</option>
                                            <option value="Huyện Nhà Bè">Huyện Nhà Bè</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </div>
                                    <div className="fv-row col-12 mb-2 col-md-3 mb-md-0 col-lg-2 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid" width="100%">
                                        <Form.Select aria-label="Default select example" id="sort" style={{ height: "100%" }}>
                                            <option value="">Sắp Xếp</option>
                                            <option value="priceDown">Từ Cao đến thấp</option>
                                            <option value="priceUp">từ thấp tới cao</option>
                                        </Form.Select>
                                    </div>
                                    <div className="fv-row col-12 mb-2 col-md-3 mb-md-0 col-lg-2 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid" width="100%">
                                        <Button type="submit" className="col-lg-12">Tìm Kiếm</Button>
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