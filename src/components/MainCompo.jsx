import React, { useState } from 'react';
import '../App.css';
import Addcontact from './AddContacts/Addcontact';
import Contacts from './Contacts/Contacts';
import ContactDetail from './ContactDetailPart/ContactDetail';
import { ContactContextProvider } from '../components/contextApi/ContactContext';

function Main() {
  return (
    <ContactContextProvider>
      <div className="container-fluid  d-lg-flex  Main-Container">
        <div className="cards">
          <div className="cardBody">
            <div className="cardpart border d-lg-flex d-md-block">
              <Addcontact />
              <Contacts />
              <ContactDetail />
            </div>
          </div>
        </div>
      </div>
    </ContactContextProvider>
  );
}
export default Main;
