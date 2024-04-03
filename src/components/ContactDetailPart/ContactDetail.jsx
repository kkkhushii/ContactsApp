import React, { useState } from 'react';
import { useContact } from '../contextApi/ContactContext';
import ContactDetailEditForm from './ContactDetailEditForm';
import '../ContactDetailPart/ContactDetail.css';

function ContactDetail() {
  const { selectedContact } = useContact();
  const [showModal, setShowModal] = useState(false);

  if (!selectedContact) {
    return <div className="centeredText">Select a contact to view details</div>;
  }

  return (
    <>
      <div>
        {selectedContact && (
          <div className="rightPart" style={{ width: '800px' }}>
            <div className="d-flex align-items-center p-3 border-bottom">
              <div>
                <img
                  src={selectedContact.profile}
                  alt="user"
                  className="rounded-circle"
                  width="46"
                />
              </div>
              <div className="mx-2">
                <h5 className="mb-0">
                  {selectedContact.firstName} {selectedContact.lastName}
                </h5>
                <small>{selectedContact.dapartment}</small>
              </div>
            </div>
            <div className="p-4">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td width="150">
                      <h6>Firstname </h6>
                    </td>
                    <td>: {selectedContact.firstName}</td>
                  </tr>
                  <tr>
                    <td>
                      {' '}
                      <h6>Lastname</h6>
                    </td>
                    <td>: {selectedContact.lastName}</td>
                  </tr>
                  <tr>
                    <td>
                      {' '}
                      <h6>Company</h6>{' '}
                    </td>
                    <td>: {selectedContact.company}</td>
                  </tr>
                  <tr>
                    <td>
                      {' '}
                      <h6>Department</h6>
                    </td>
                    <td>: {selectedContact.dapartment}</td>
                  </tr>
                  <tr>
                    <td>
                      {' '}
                      <h6>Email</h6>{' '}
                    </td>
                    <td>: {selectedContact.email}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Phone</h6>
                    </td>
                    <td>: {selectedContact.phone}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Address</h6>
                    </td>
                    <td>: {selectedContact.address}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Note</h6>
                    </td>
                    <td>: {selectedContact.note}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => setShowModal(true)}
                      >
                        Edit Contact
                      </button>
                      <ContactDetailEditForm
                        contacts={selectedContact}
                        show={showModal}
                        onHide={() => setShowModal(false)}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default ContactDetail;
