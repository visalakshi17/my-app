import ReactDOM from 'react-dom/client';
import { Component, ReactNode } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import displayStyles from '../displayPersonDetails/displayPersonDetails.module.css';
// import '../displayPersonDetails/displayPersonDetails.css'
import { IpersonDetails } from '../../model/model';
import { IDetailsProps } from './IDisplayPersonDetails';
import { Link } from 'react-router-dom';

const DisplayPersonDetails = (props:IDetailsProps) => {
    console.log('iui');
    const[formState,setFormState]=useState('');
    const handleNameChange = (event: { target: { value: any; }; }) => {
        setFormState(event.target.value);
      };
    const[userDetails,setUserDetails]=useState<IpersonDetails>({id:'',name:'',mail:'',mobile:'',landline:'',website:'',address:''});
    useEffect(() => {
        console.log('selectedmode');
        if (props.selectedMode === "edit") {
            console.log('selectedmode');
          setUserDetails({
            id: '',
            name: props.selectedContact.name,
            mail: props.selectedContact.mail,
            mobile: props.selectedContact.mobile,
            landline: props.selectedContact.landline,
            website: props.selectedContact.website,
            address: props.selectedContact.address
          });
        }
      }, [props.selectedMode, props.selectedContact]);
      const deleteContact=()=>{
        console.log("del");
        props.setcurrentContacts(props.currentContacts.filter((contact)=>contact.id!==props.selectedContact.id));
        props.setContactList(props.contactList.filter((contact)=>contact.id!==props.selectedContact.id));
        props.toggleContactDetails(false);
        console.log(props.currentContacts);
        
      }
    return (
        <div className={displayStyles.details} id="details">
            <div className={displayStyles.topSection}>
                <div className={displayStyles.nameSection}>{props.selectedContact.name}</div>
                <div className={displayStyles.edit}>
                  <Link to="/edit">
                    <img src={require('../../assets/edit1.jpg')} id="editImg" className={displayStyles.editImg} onClick={()=>{props.setMode("edit");props.toggleForm(true);props.toggleContactDetails(false)}}/>
                    </Link>
                  <p id="editText">EDIT</p>
                  </div>
                <div className={displayStyles.delete} id="dlt">
                  <Link to="/delete">
                  <img src={require('../../assets/delete1.png')} className={displayStyles.dltImg} onClick={deleteContact} id="dltImg"/>
                  </Link>
                  <p id="dltText" className={displayStyles.dltText} >DELETE</p>
                </div>
            </div>
            <div className={displayStyles.mailSection}>
                <p>Email: {props.selectedContact.mail}</p>
                    <p id="mailError"></p>
            </div>
            <div className={displayStyles.mobileSection}>
                <p>Mobile: {props.selectedContact.mobile}</p>
                <p id="phnoError"></p>
                <p>Landline: {props.selectedContact.landline}</p>
                <p id="phnoError"></p>
            </div>
            <div className={displayStyles.websiteSection}>
            <p>Website: {props.selectedContact.website}</p>
            </div>
            <div className={displayStyles.addressSection}>
            <p>Address: {props.selectedContact.address}</p>
            </div>
        </div>
        // let currentContact=findContact(id);
        // let index=contactList.indexOf(currentContact);
        // console.log(contactList[parseInt(id)].name);
        // let clas=document.getElementById(id) as HTMLElement;
        // clas.className="active";
        // console.log(clas.className);
        // let form=document.getElementById("form") as HTMLElement;
        // let details=document.getElementById("details") as HTMLElement;
        // details.style.display = 'block';
        // form.style.display = 'none';
        // let nameSection=document.getElementById("nameSection") as HTMLTextAreaElement;
        // nameSection.value = contactList[index].name;
        // nameSection.disabled = true;
        // let mailSection=document.getElementById("mailSection") as HTMLTextAreaElement;
        // mailSection.value = "Email: " +contactList[index].mail;
        // mailSection.disabled = true;
        // let mobileSection=document.getElementById("mobilSection") as HTMLTextAreaElement;
        // mobileSection.value = "Mobile: " +contactList[index].mobile;
        // mobileSection.disabled = true;
        // let landlineSection=document.getElementById("landlineSection") as HTMLTextAreaElement;
        // landlineSection.value = "Landline: " +contactList[index].landline;
        // landlineSection.disabled = true;
        // let addresSection=document.getElementById("addresSection") as HTMLTextAreaElement;
        // addresSection.value = "Address: " +contactList[index].address;
        // addresSection.disabled = true;
        // let dltBtn = document.getElementById("dltImg") as HTMLElement;
        // dltBtn.setAttribute('onclick','deleteContact(id)');
        // var i = id;
        // for(let j in contactList){
        //     if(j!=i && contactList[j]){
        //         let ele=document.getElementById(j) as HTMLElement;
        //         ele.className="variable";
        //     }
        // }
        // let editBtn = document.getElementById("editImg") as HTMLElement;
        // editBtn.setAttribute('onclick','contactServices.update(id)');
        // )}
    )
}
export default DisplayPersonDetails