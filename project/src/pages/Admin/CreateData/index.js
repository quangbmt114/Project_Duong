import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const MyModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleCloseModal = () => {
        // Xử lý dữ liệu nhập vào form ở đây
        console.log(formData);

        // Đóng modal
        setShowModal(false);
    };

    const handleShowModal = () => {
        // Mở modal
        setShowModal(true);
    };

    const handleFormChange = (event) => {
        // Cập nhật dữ liệu nhập vào form
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
    <>
            <Button variant="primary" onClick={handleShowModal}>
                Open Modal
            </Button>

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
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>handleCloseModal}>
                        Close
                    </Button>

                    <Button variant="primary" onClick={handleCloseModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
                </Modal>
                </>
    )
}
    export default MyModal;
            

