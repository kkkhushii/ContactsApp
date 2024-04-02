import React,{useState} from 'react'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {useDepartment} from  '../contextApi/DepartmentContext'
import { Button, Modal } from 'react-bootstrap';
import AddContactForm from '../AddContacts/AddContactForm';
import '../AddContacts/AddContact.css';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Addcontact() {
  const {setSelectedDepartment} = useDepartment();
  const [show, setShow] = useState(false);
  const [selectedLink, setSelectedLink] = useState('All');

  const handleDepartmentClick = (dapartment) => {
    setSelectedDepartment(dapartment);
   setSelectedLink(dapartment);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <div className='LeftPart bg-white border-end'>
     <div className="p-3  border-bottom">
      <button className='btn btn-danger cursor-pointer w-100 mb-1 mt-1' onClick={handleShow}>Add New Contacts</button> 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <AddContactForm handleClose={handleClose}/>
      </Modal>
     </div>
      <ul className='list-group list-group-flush'>
             <h6 className="px-3 pt-3">Filter </h6>
             <a href="#" className={`py-3 border-0 list-group-item  ${selectedLink === 'All' ? 'selected' : ''}`} onClick={() => handleDepartmentClick('All')}> 
             <PeopleOutlineIcon className='mx-1' style={{width:"22px"}}/>All</a>
             <a href="#" className={`py-3 border-0 list-group-item  ${selectedLink === 'Frequent' ? 'selected' : ''}`} onClick={() => handleDepartmentClick('Frequent')}>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='mx-1'  style={{width:"18px"}}><path d="M296 136V88h48v48H296zM288 32c-26.5 0-48 21.5-48 48v4H121.6C111.2 62.7 89.3 48 64 48C28.7 48 0 76.7 0 112s28.7 64 64 64c25.3 0 47.2-14.7 57.6-36h66.9c-58.9 39.6-98.9 105-104 180H80c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48h-3.3c5.9-67 48.5-123.4 107.5-149.1c8.6 12.7 23.2 21.1 39.8 21.1h64c16.6 0 31.1-8.4 39.8-21.1c59 25.7 101.6 82.1 107.5 149.1H496c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48h-4.5c-5-75-45.1-140.4-104-180h66.9c10.4 21.3 32.3 36 57.6 36c35.3 0 64-28.7 64-64s-28.7-64-64-64c-25.3 0-47.2 14.7-57.6 36H400V80c0-26.5-21.5-48-48-48H288zM88 376h48v48H88V376zm416 48V376h48v48H504z"/></svg>
              Frequent</a>
             <a href="#" className={`py-3 border-0 list-group-item  ${selectedLink === 'Starred' ? 'selected' : ''}`}  onClick={() => handleDepartmentClick('Starred')}> 
             <StarBorderIcon className='mx-0' style={{width:"22px"}}/>Starred</a>
             <div className='border-bottom py-2 mb-2'></div>
             <h6 className="px-3 pt-3">Filter By Categories</h6>
             <a href="#" className={`py-3 border-0 list-group-item  ${selectedLink === 'Engineering' ? 'selected' : ''}`}  dapartment="Engineering" onClick={() => handleDepartmentClick("Engineering")}> <BookmarkBorderIcon style={{width:"22px"}}/>Engineering</a>
             <a href="#" className={`py-3 border-0 list-group-item  ${selectedLink === 'Support' ? 'selected' : ''}`}  dapartment="Support" onClick={() => handleDepartmentClick("Support")}><BookmarkBorderIcon style={{width:"22px"}}/>Support</a>
             <a href="#" className={`py-3 border-0 list-group-item  ${selectedLink === 'Sales' ? 'selected' : ''}`}   dapartment="Sales"   onClick={() => handleDepartmentClick("Sales")}><BookmarkBorderIcon style={{width:"22px"}}/>Sales</a>
      </ul>
    </div>
  )
}

export default Addcontact