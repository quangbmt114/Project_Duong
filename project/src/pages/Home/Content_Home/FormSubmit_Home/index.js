import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState,useEffect } from 'react';
import { Formik } from 'formik';
import * as yup from "yup";
import axios from 'axios';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  city: yup.string().required(),
});

function FormExample() {
  const [handleDataForm,setHandleDataFrom]=useState(null)
            const handleSubForm = async()=>{
              if(handleDataForm!=null){
                const dataAPI = await axios.post(`${process.env.REACT_APP_API}/requests`,handleDataForm)
                alert("Gửi yêu cầu tư vấn thành công !!")
              }   
            }
            useEffect(() => {
             handleSubForm()
            }, []);
  return (
    <Formik
      validationSchema={schema}
     onSubmit ={(values)=>{
      setHandleDataFrom(values)
      console.log(values)
     }}
      initialValues={{
        firstName:'',
        lastName: '',
        username: '',
        city: '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
        
        <h3 className='fs-1 text-dark mb-4' >Tư Vấn Miễn Phí</h3>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationName">
              <Form.Label>Họ và tên</Form.Label>
              <Form.Control className="form-control form-control-solid"
               type="text"
                placeholder="Nhập SĐT Liên Hệ"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationNumber">
              <Form.Label>SĐT Liên Hệ</Form.Label>
              <Form.Control className="form-control form-control-solid"
                type="text"
                placeholder="Nhập SĐT Liên Hệ"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
              />

              <Form.Control.Feedback type="invalid">Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormikEmail">
              <Form.Label>Email liên hệ (Nếu có)</Form.Label>
              <InputGroup hasValidation>
                
                <Form.Control className="form-control form-control-solid"
                  type="email"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationRentArea">
              <Form.Label>Khu vực bạn muốn thuê</Form.Label>
              <Form.Control className="form-control form-control-solid"
                type="text"
                placeholder="Khu vực bạn muốn thuê"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            
            <Form.Group as={Col} md="12" controlId="validationNotes">
              <Form.Label>Ghi chú Khác</Form.Label>
              <Form.Control as="textarea" rows={6} className="form-control form-control-solid"
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback >
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit">Yêu Cầu Tư Vấn</Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormExample