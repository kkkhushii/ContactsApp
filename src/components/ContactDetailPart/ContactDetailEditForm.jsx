import React ,{useState,useEffect} from 'react'
import {useDepartment} from'../contextApi/DepartmentContext';
import { Modal, Button, Form, Col,Row } from 'react-bootstrap';

function ContactDetailEditForm({ contacts, show, onHide }) {
    const { updateContact,selectedContact } = useDepartment();
    const [formData, setFormData] = useState(selectedContact);

    useEffect(() => {
        setFormData(contacts); // Update the form data whenever the contact changes
      }, [contacts]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

      
      };

      const handleSave = () => {
        updateContact(formData);
        onHide();
      };
   
    
  return (
        <div>
        <Modal show={show} onHide={onHide}>
       <Modal.Header closeButton>
        <Modal.Title>Edit Contact</Modal.Title>
       </Modal.Header>
      <Modal.Body>
       <Form>
        <Row>
        <Col>
         <Form.Group controlId="firstName"  className='formfeild'>
           <Form.Label  className='lablefeild'>First Name</Form.Label>
           <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
         </Form.Group>
         <Form.Group controlId="lastName" className='formfeild'>
           <Form.Label  className='lablefeild'>Last Name</Form.Label>
           <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
         </Form.Group>
         <Form.Group controlId="dapartment" className='formfeild'>
         <Form.Label className='lablefeild'>Department</Form.Label>
          <Form.Select name="dapartment" onChange={handleChange}>
              <option value={formData.dapartment}>{formData.dapartment}</option>
             <option value="Engineering">Engineering</option>
            <option value="Sales">Sales</option>
              <option value="Support">Support</option>
       </Form.Select>
      </Form.Group>
         <Form.Group controlId="address" className='formfeild'>
           <Form.Label  className='lablefeild'>Address</Form.Label>
           <Form.Control as="textarea" rows={3} name="address" value={formData.address} onChange={handleChange} />
         </Form.Group>
         
         </Col>
         <Col>
         <Form.Group controlId="email" className='formfeild'>
           <Form.Label  className='lablefeild'>Email</Form.Label>
           <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
         </Form.Group>
         <Form.Group controlId="phone" className='formfeild'>
           <Form.Label  className='lablefeild'>Phone</Form.Label>
           <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} />
         </Form.Group>
         <Form.Group controlId="company" className='formfeild'>
           <Form.Label  className='lablefeild'>Company</Form.Label>
           <Form.Control type="text" name="company" value={formData.company} onChange={handleChange} />
         </Form.Group>
         <Form.Group controlId="note" className='formfeild'>
           <Form.Label  className='lablefeild'>Note</Form.Label>
           <Form.Control as="textarea" rows={3} name="note" value={formData.note} onChange={handleChange} />
         </Form.Group>
         </Col>
         </Row>
       </Form>
     </Modal.Body>
     <Modal.Footer>
       <Button variant="primary" onClick={handleSave}>Save Changes</Button>
     </Modal.Footer>
   </Modal>
   </div>
  )
}

export default ContactDetailEditForm
