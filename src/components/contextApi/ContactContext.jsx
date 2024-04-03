import React, { createContext, useState, useContext, useEffect } from 'react';
import { contactdata } from '../../Data/contactsData';

const ContactContext = createContext();
export const useContact = () => useContext(ContactContext);

export const ContactContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState(contactdata);
  const [starredContacts, setStarredContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const selectContact = (contact) => {
    setSelectedContact(contact);
  };

  useEffect(() => {
    const initialStarredContacts = contactdata
      .filter((contact) => contact.Starred)
      .map((contact) => contact.id);
    setStarredContacts(initialStarredContacts);
  }, []);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (contactId) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
    setContacts(updatedContacts);

    // Clear selected contact if it's deleted or if there are no contacts left
    if (!updatedContacts.length || (selectedContact && selectedContact.id === contactId)) {
      setSelectedContact(null);
    }
  };

  const updateContact = (updatedContact) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) => {
        if (contact.id === updatedContact.id) {
          return updatedContact;
        }
        return contact;
      })
    );

    setSelectedContact(updatedContact);
  };

  const toggleStarred = (contactId) => {
    if (starredContacts.includes(contactId)) {
      setStarredContacts(starredContacts.filter((id) => id !== contactId));
    } else {
      setStarredContacts([...starredContacts, contactId]);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        selectedDepartment,
        toggleStarred,
        setSelectedDepartment,
        contacts,
        setContacts,
        starredContacts,
        setStarredContacts,
        selectedContact,
        setSelectedContact,
        selectContact,
        addContact,
        updateContact,
        deleteContact
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
