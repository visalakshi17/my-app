import contactStyles from "./contacts.module.css"
import { IpersonDetails } from "../../model/model";
import { v4 as uuidv4 } from 'uuid';
import { IContactState } from "./Icontacts";
import { Link, useParams } from "react-router-dom";

const person1={id:uuidv4(),name:"Chandermani Arora",mail:"chandermani@technovert.com",mobile:"+91 9292929292",landline:"040301231211",website:"http://www.technovert.com",address:"123 now here\nSome street\nMadhapur, Hyderabad 500033"} as IpersonDetails;
const person2={id:uuidv4(),name:"Sashi Pagadala",mail:"sashipadigala@technovert.com",mobile:"+91 92929292922",landline:"040 30 1231211",website:"http://www.technovert.com",address:"123 nowhere\nSome street\n Madhapur,Hyderabad 500033"} as IpersonDetails;
const person3={id:uuidv4(),name:"Praveen Battula",mail:"praveenbattula@technovert.com",mobile:"+91 92929292922", landline:"040 30 1231211",website:"http://www.technovert.com",address:"123 nowhere\nSome street\nMadhapur,Hyderabad 500033"} as IpersonDetails;
const person4={id:uuidv4(),name:"Vijay Yalamanchili",mail:"vijayyalamanculi@technovert.com",mobile:"+91 92929292922", landline:"040 30 1231211",website:"http://www.technovert.com",address:"123 nowhere Some street Madhapur,Hyderabad 500033"} as IpersonDetails;

const Contacts=(props:IContactState)=> {
    console.log(props.contactList);
    const contacts = props.contactList.map(contact =>
      // <div className={contactStyles.person} key={contact.id} onClick={(key)=>props.toggleContactDetails(true)}></div>
      // <Link to={'/contact/${contact.name}'}> 
      <div className={contactStyles.person} key={contact.id} onClick={()=>{props.selectContact(contact);props.toggleForm(false);props.toggleContactDetails(true)}}>
        <div className={contactStyles.name}>{contact.name}</div>
        <div className={contactStyles.mail}>{contact.mail}</div>
        <div className={contactStyles.phNo}>{contact.mobile}</div>
      </div>
    );
    return (<div className={contactStyles.contactSection}>{contacts}</div>);
  }
export default Contacts