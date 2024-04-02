import React,{useState} from 'react'
import {useDepartment } from '../contextApi/DepartmentContext'
import { Button, Modal ,Form, Row,Col } from 'react-bootstrap';
import profilepic from '../../assets/user5.jpg'

function AddContactForm({handleClose}) {
    
    const { addContact } = useDepartment();
    const [formData, setFormData] = useState({ 
        id:'',
        firstName:'',
        lastName:'',
        profile: profilepic, 
        company: '',
        phone:'',
        email:'',
        address:'',
        note:'',
        dapartment: '' });

        const handleChange = (e) => {
            const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
       
           
          };

          const handleSubmit = (e) => {
            e.preventDefault();
               addContact(formData);
                handleClose();
          };
          

  return (
    <div>
       <Modal.Body>
       <Form onSubmit={handleSubmit}>
        <Row>
        <Col>
        <Form.Group controlId="firstName" className='formfeild'>
          <Form.Label className='lablefeild'>First Name</Form.Label>
          <Form.Control type="text" name="firstName" placeholder="Enter first name" onChange={handleChange} required/>
        </Form.Group>
        <Form.Group  controlId="lastName" className='formfeild'>
          <Form.Label className='lablefeild'>Last Name</Form.Label>
          <Form.Control type="text" name="lastName" placeholder="Enter last name" onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="dapartment" className='formfeild'>
         <Form.Label className='lablefeild'>Department</Form.Label>
          <Form.Select name="dapartment" onChange={handleChange}>
              <option value="">Select department</option>
             <option value="Engineering">Engineering</option>
            <option value="Sales">Sales</option>
              <option value="Support">Support</option>
       </Form.Select>
      </Form.Group>
        <Form.Group controlId="address" className='formfeild'>
          <Form.Label className='lablefeild'>Address</Form.Label>
          <Form.Control as="textarea" rows={3} name="address" placeholder="Enter address" onChange={handleChange} />
        </Form.Group>
        </Col>
        <Col>
        <Form.Group controlId="email" className='formfeild'>
          <Form.Label className='lablefeild'>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="phone" className='formfeild'>
          <Form.Label className='lablefeild'>Phone</Form.Label>
          <Form.Control type="tel" pattern="[0-9]*" name="phone" placeholder="Enter phone number" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="company" className='formfeild'>
          <Form.Label className='lablefeild'>Company</Form.Label>
          <Form.Control type="text" name="company" placeholder="Enter company" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="note" className='formfeild'>
          <Form.Label className='lablefeild'>Note</Form.Label>
          <Form.Control as="textarea" rows={3} name="note" placeholder="Enter note" onChange={handleChange} />
        </Form.Group>
        </Col>
        </Row>
        <Button variant="primary" type='submit'>
         Save
       </Button>
      </Form>
    </Modal.Body>
    
    </div>
  )
}

export default AddContactForm;
