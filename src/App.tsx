import React, { useState } from 'react';
import './App.css';
import { Component } from 'react';
import { IpersonDetails } from '../src/model/model';
import Header from '../src/components/header/header';
import DisplayContacts from '../src/components/displayContacts/displayContacts';
import Contacts from '../src/components/contacts/contacts';
import DisplayForm from '../src/components/displayForm/displayForm';
import { isVisible } from '@testing-library/user-event/dist/utils';
import DisplayPersonDetails from '../src/components/displayPersonDetails/displayPersonDetails';
import { contacts } from './services/services';
import { IValidDetails } from '../src/components/displayForm/validations';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


interface IAppState {
  show: boolean;
  displayContactDetails: boolean;
  currentContacts: IpersonDetails[];
  contactList: IpersonDetails[];
  selectedContact: IpersonDetails;
  selectedMode: string;
  validDetails: IValidDetails;
}

export default class App extends Component<{}, IAppState>{
  constructor(props: {}) {
    super(props);
    this.state = {
      show: false,
      displayContactDetails: false,
      currentContacts: [],
      contactList: contacts,
      selectedContact: { id: "", name: "", mail: "", mobile: "", landline: "", website: "", address: "" },
      selectedMode: "view",
      validDetails: { validName: "false", validMail: "false", validMobile: "false", validLandline: "false", validWebsite: "false", validAddress: "false" },
      //errorMsg:{nameError:"",mailError:"", mobileError:"",landlineError:"",websiteError:"",addressError:""}
    };
  }
  //const [validDetails,setValidDetails]=useState({validName:false,validMail:false,validMobile:false,validLandline:false,validWebsite:false,validAddress:false});
  toggleContactDetails = (isVisible: boolean) => { this.setState({ displayContactDetails: isVisible }) }
  toggleForm = (isVisible: boolean) => { this.setState({ show: isVisible }) }
  selectContact = (contact: IpersonDetails) => { this.setState({ selectedContact: contact }) }
  displayContact = (isVisible)
  setMode = (mode: string) => { this.setState({ selectedMode: mode }) }
  setCurrentContacts = (currentContactList: IpersonDetails[]) => { this.setState({ currentContacts: currentContactList }) }
  setContactList = (contactList: IpersonDetails[]) => { this.setState({ contactList: contactList }) }
  setValidDetails = (validDetails: IValidDetails) => { this.setState({ validDetails: validDetails }) }
  //setErrorMsg=(errorMsg:IErrorMsg)=>{this.setState({errorMsg:errorMsg})}
  // setkey=(setkey:string)=>{this.setState({key:setkey})}
  // (id:string){
  //   this.setState({ activeContact:getContact(this.state.contactList,id),showContactInfo:true,showForm:false,initialPage:true});
  // }

  render() {
    return (
      <React.Fragment>
          <Header toggleForm={this.toggleForm} setMode={this.setMode} toggleContactDetails={this.toggleContactDetails} />
          <div className='Display'>
            <div className='contactDisplay'>
              <DisplayContacts/>
              <Contacts setContactList={this.setContactList} contactList={this.state.contactList} selectContact={this.selectContact} toggleContactDetails={this.toggleContactDetails} toggleForm={this.toggleForm} />
            </div>
            <div>{this.state.show && <DisplayForm contactList={this.state.contactList} selectedContact={this.state.selectedContact} selectedMode={this.state.selectedMode} setMode={this.setMode} toggleForm={this.toggleForm} />}<div />
              <div>{this.state.displayContactDetails && <DisplayPersonDetails contactList={this.state.contactList} setContactList={this.setContactList} setcurrentContacts={this.setCurrentContacts} currentContacts={this.state.currentContacts} selectedMode={this.state.selectedMode} toggleForm={this.toggleForm} selectedContact={this.state.selectedContact} setMode={this.setMode} toggleContactDetails={this.toggleContactDetails} />}</div>
            </div></div>
        {/* <Validate validDetails={this.state.validDetails} setValidDetails={this.setValidDetails} setErrorMsg={this.setErrorMsg} errorMsg={this.state.errorMsg} type={''} input={''}/> */}
      </React.Fragment>
    )
  }
}