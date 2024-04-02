import React,{useState} from 'react'
import '../App.css'
import Addcontact from './AddContacts/Addcontact'
import Contacts from './Contacts/Contacts'
import ContactDetail from './ContactDetailPart/ContactDetail'
import {DepartmentProvider} from '../components/contextApi/DepartmentContext'

function Main() {

      
  return (
      <DepartmentProvider>
      <div className='container-fluid  d-lg-flex  Main-Container'>
          <div className='cards'>
                <div className='cardBody'> 
                <div className='cardpart border d-lg-flex d-md-block'>
                      <Addcontact/>
                      <Contacts />
                      <ContactDetail />
                </div>
                </div>
          </div>
     </div>
    </DepartmentProvider>
  );
};
export default Main;