import { v4 as uuidv4 } from 'uuid';
import ReactDOM from 'react-dom/client';
import { Component, ReactNode } from 'react';
import { IpersonDetails } from '../model/model';
import Contacts from '../components/contacts/contacts';

const person1={id:uuidv4(),name:"Chandermani Arora",mail:"chandermani@technovert.com",mobile:"+91 9292929292",landline:"040301231211",website:"http://www.technovert.com",address:"123 now here\nSome street\nMadhapur, Hyderabad 500033"} as IpersonDetails;
const person2={id:uuidv4(),name:"Sashi Pagadala",mail:"sashipadigala@technovert.com",mobile:"+91 92929292922",landline:"040 30 1231211",website:"http://www.technovert.com",address:"123 nowhere\nSome street\n Madhapur,Hyderabad 500033"} as IpersonDetails;
const person3={id:uuidv4(),name:"Praveen Battula",mail:"praveenbattula@technovert.com",mobile:"+91 92929292922", landline:"040 30 1231211",website:"http://www.technovert.com",address:"123 nowhere\nSome street\nMadhapur,Hyderabad 500033"} as IpersonDetails;
const person4={id:uuidv4(),name:"Vijay Yalamanchili",mail:"vijayyalamanculi@technovert.com",mobile:"+91 92929292922", landline:"040 30 1231211",website:"http://www.technovert.com",address:"123 nowhere Some street Madhapur,Hyderabad 500033"} as IpersonDetails;
export let contacts=[person1,person2,person3,person4];
// export let contactList=[person1,person2,person3,person4];

export let getContact=(contactList:IpersonDetails[],id:string)=> contactList.filter((contact)=>contact.id===id);
export let addContact=(contactList:IpersonDetails[],contact:IpersonDetails)=>{
    contact.id=uuidv4();
    contactList.push(contact);
    // console.log('addcontact');
    // console.log(contactList);
    //<Contacts contactList={contactList}/>
}
export const deleteContactById=(id:string):void=>{
    console.log("deletecontactbyid");
    // contactList.filter((contact)=>contact.id!==id);
    // return(contactList);
}
// export class Services{
//     Add(contact:IpersonDetails){
//         contactList.push(contact);
//     }
    // update(id:string){
    //     editPerson(id);
    // }
    // delete(id:string) {
    //     deleteContact(id);
    // }
    // getContactById(id:string){
    //     return findContact(id);
    // }
//}

















// export let deleteContact=(contactList:IpersonDetails[],id:string)=>contactList.filter((contact)=>contact.id!==id);
// export let addContact=(contact:IpersonDetails)=>{
//     contact.id=uuid();
//     contactList.push(contact);
//     return contactList;
// }
// export let updateContact=(oldContact:IpersonDetails,newContact:IpersonDetails,contacts:IpersonDetails[])=>{
//     newContact.id=oldContact.id;
//     contacts[contacts.indexOf(oldContact)]=newContact;
//     return contacts;
// }
