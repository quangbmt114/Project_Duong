import { useState } from 'react';
import { Table, Button, Modal, Form, FormGroup, Label, Input } from 'react-bootstrap';

function RequestList({ requests, handleEdit, handleDelete }) {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Time</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {requests.map((request, index) => (
          <tr key={index}>
            <td>{request.title}</td>
            <td>{request.description}</td>
            <td>{request.time}</td>
            <td>
              <Button variant="primary" onClick={() => handleEdit(index)}>Edit</Button>{' '}
              <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

function RequestForm() {
  const [requests, setRequests] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleEdit = (index) => {
    setEditingIndex(index);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    setRequests(requests.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newRequest = {
      title: formData.get('title'),
      description: formData.get('description'),
      time: new Date().toLocaleString(),
    };
    if (editingIndex === null) {
      setRequests([...requests, newRequest]);
    } else {
      setRequests(requests.map((request, index) => index === editingIndex ? newRequest : request));
      setEditingIndex(null);
    }
    setShowModal(false);
  };

  return (
    <>
      <RequestList requests={requests} handleEdit={handleEdit} handleDelete={handleDelete} />
      <Button variant="success" onClick={() => setShowModal(true)}>Add Request</Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editingIndex === null ? 'Add Request' : 'Edit Request'}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <FormGroup>
              <Label>Title</Label>
              <Input type="text" name="title" defaultValue={editingIndex !== null ? requests[editingIndex].title : ''} required />
            </FormGroup>
            <FormGroup>
              <Label>Description</Label>
              <Input type="textarea" name="description" defaultValue={editingIndex !== null ? requests[editingIndex].description : ''} required />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button variant="primary" type="submit">{editingIndex === null ? 'Add' : 'Save'}</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
