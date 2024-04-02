import React,{createContext,useState,useContext, useEffect} from 'react'
import {contactdata} from '../../Data/contactsData';


const DepartmentContext = createContext();

export const useDepartment = () => useContext(DepartmentContext);


export const DepartmentProvider = ({ children }) => {
   
    const [contacts, setContacts] = useState(contactdata);

    const [starredContacts, setStarredContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    // const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [selectedDepartment, setSelectedDepartment] = useState('All');

    const selectContact = (contact) => {
      setSelectedContact(contact);
    };
    
     useEffect(()=>{ 
      //  setSelectedContact(contacts[0]);
        const initialStarredContacts = contactdata.filter(contact => contact.Starred).map(contact => contact.id);
        setStarredContacts(initialStarredContacts);
     },[])
    const addContact = (newContact) => {
      setContacts([...contacts, newContact]);
    };
    const deleteContact = (contactId) => {
      const updatedContacts = contacts.filter(contact => contact.id !== contactId);
      setContacts(updatedContacts);
  
      // Clear selected contact if it's deleted or if there are no contacts left
      if (!updatedContacts.length || (selectedContact && selectedContact.id === contactId)) {
        setSelectedContact(null);
      }
    };
    // this is only for selected component
    // const updateContact = (updatedContact) => {
    //   setSelectedContact(updatedContact);
    // };
    const updateContact = (updatedContact) => {
      setContacts(prevContacts => prevContacts.map(contact => {
        if (contact.id === updatedContact.id) {
          return updatedContact;
        }
        return contact;
      }));
  
      setSelectedContact(updatedContact);
    };

    const toggleStarred = (contactId) => {
      if (starredContacts.includes(contactId)) {
        setStarredContacts(starredContacts.filter(id => id !== contactId));
      } else {
        setStarredContacts([...starredContacts, contactId]);
      }
    };
    
    return (
      <DepartmentContext.Provider value={{selectedDepartment,toggleStarred, setSelectedDepartment, contacts,setContacts ,starredContacts,setStarredContacts, selectedContact, setSelectedContact,selectContact,addContact,updateContact,deleteContact}}>
        {children}
      </DepartmentContext.Provider>
    );
  };


  