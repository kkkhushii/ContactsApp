import React, { useEffect, useState } from 'react'
import '../Contacts/Contact.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {contactdata} from '../../Data/contactsData'
import { useDepartment } from '../../components/contextApi/DepartmentContext';
import   ContactDetail from '../ContactDetailPart/ContactDetail'
import StarIcon from '@mui/icons-material/Star';


function Contacts() {
  const {selectedDepartment,setContacts,contacts,setStarredContacts,deleteContact ,starredContacts,toggleStarred,setSelectedContact,selectedContact} = useDepartment();

  const [serach,setSearch]=useState('');
  const [starred, setStarred] = useState(false);

    useEffect(()=>{
      setContacts(contactdata);
    },[]);

    const handleSearch =(e)=>{
        setSearch(e.target.value);
    }
    // const handleDelete = (id) => {
    //   deleteContact(id);
    // };

    const handleDeleteClick = (contactId) => {
      deleteContact(contactId);
    };
    

const FilterData = (cnt,  dep) => {
  if (dep !== 'All') {
    if (dep === 'Frequent') {
      cnt = cnt.filter(contact => contact.Frequent);
    } else if (dep === 'Starred') {
      cnt = cnt.filter(contact => starredContacts.includes(contact.id));
      // cnt = cnt.filter(contact => contact.starred || starredContacts.includes(contact.id));
    } else {
      cnt = cnt.filter(contact => contact.dapartment === dep);
    }
  }
  if (serach !== '') {
    cnt = cnt.filter((ct) =>
      ct.firstName.toLocaleLowerCase().includes(serach.toLocaleLowerCase())||
      ct.lastName.toLowerCase().includes(serach.toLowerCase())

    );
  }
  
  return cnt;
};

const getContacts = FilterData(contacts,selectedDepartment);

const handleContactClick = (contact) => {
  setSelectedContact(contact);

   // selectContact(contact);

}

  
  return (
    <div className='border-end  bg-white flex-shrink-0  MiddlePart'>
        <div className="p-3 border-bottom d-flex ">
        <form className="flex-grow-1">
         <input id="searchUser" name="searchUser" placeholder="Search Contact..." type="text" className="form-control mb-1 mt-1 form-control" value={serach} onChange={handleSearch}/>
        </form>
         </div>
         {/* <div style={{backgroundColor:"beige", height:"100%"}}> */}
         {getContacts.length === 0 ? (
          <p  className='centeredPText'> No starred contacts available.</p>
         ) : (
         getContacts.map((contact, index)=>(
          <ul className="nav cursor-pointer" key={index} >
             <li className={`w-100 bg-white nav-item ${selectedContact && selectedContact.id === contact.id ? 'selected-contact' : 'bg-dark'}`} > 
                <div className="d-flex align-items-center justify-content-between p-3 mb-1">
               {/* <div className="d-flex al11ign-items-center"  onClick={() => handleContactClick(contact)} style={{ backgroundColor: selectedContact === contact.id ? 'black' : 'white' }} > */}
               <div className='d-flex align-items-center' onClick={() => handleContactClick(contact)}>
               <div><img src={contact.profile} alt="user" className="rounded-circle" width="50"/></div>
               <div className="mx-2 flex-grow-1">
                   <h5 className="mb-0 text-truncate" style={{width: "140px" ,fontSize:"1rem"}}>{contact.firstName} {contact.lastName}</h5>
                   <small style={{fontSize:"0.875"}}>{contact.dapartment}</small></div>
    
               </div>
              <div className="d-flex flex-shrink-0">
                {/* <StarIcon onClick={() => toggleStarred(contact.id)} style={{ color: starredContacts.includes(contact.id) ? 'rgb(255, 193, 7)' : 'black' }}/> */}
                {
                starredContacts.includes(contact.id) ? 
                <StarIcon onClick={() => toggleStarred(contact.id)} style={{ color: 'rgb(255, 193, 7)' }} /> : 
                <StarBorderIcon onClick={() => toggleStarred(contact.id)} />
                }

               <DeleteOutlineIcon  onClick={() => handleDeleteClick(contact.id)}/>
             </div>
    </div>
    </li>
    
    </ul>
    ))
      )}
      {/* </div> */}

    


  </div>
  )
}

export default Contacts;
