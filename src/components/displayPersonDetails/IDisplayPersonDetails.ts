import { IpersonDetails } from "../../model/model";
export interface IDetailsProps{
    toggleContactDetails:(isVisible:boolean)=>void;
    selectedContact:IpersonDetails;
    selectedMode:string;
    setMode:(mode:string)=>void;
    toggleForm:(isVisible:boolean)=>void;
    currentContacts:IpersonDetails[];
    setcurrentContacts:(currentContactList:IpersonDetails[])=>void;
    contactList:IpersonDetails[];
    setContactList:(contactList:IpersonDetails[])=>void;
}