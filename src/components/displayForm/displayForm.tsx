import ReactDOM from 'react-dom/client';
import { v4 as uuidv4 } from 'uuid';
import { Component, ReactNode } from 'react';
import { useState } from 'react';
import formStyles from './displayForm.module.css'
import { IpersonDetails } from '../../model/model';
import { addContact } from '../../services/services';
import { Validate } from './validations';
import {IDisplayProps} from './IDisplayForm'

const DisplayForm = (props: IDisplayProps) => {
    const [details, setDetails] = useState({
        id: uuidv4(),
        name: ((props.selectedMode === "edit") ? (props.selectedContact.name) : ""),
        mail: ((props.selectedMode === "edit") ? (props.selectedContact.mail) : ""),
        mobile: ((props.selectedMode === "edit") ? (props.selectedContact.mobile) : ""),
        landline: ((props.selectedMode === "edit") ? (props.selectedContact.landline) : ""),
        website: ((props.selectedMode === "edit") ? (props.selectedContact.website) : ""),
        address: ((props.selectedMode === "edit") ? (props.selectedContact.address) : "")
    });
    const [form, setForm] = useState(true);
    const [nameError, setNameError] = useState("");
    const [mailError, setMailError] = useState("");
    const [mobileError, setMobileError] = useState("");
    const [landlineError, setlandlineError] = useState("");
    const [websiteError, setwebsiteError] = useState("");
    const [addressError, setAddressError] = useState("");

    const [isNameValid, setisNameValid] = useState(false);
    const [isMailValid, setisMailValid] = useState(false);
    const [isMobileValid, setisMobileValid] = useState(false);
    const [isLandlineValid, setisLandlineValid] = useState(false);
    const [isWebsiteValid, setisWebsiteValid] = useState(false);
    const [isAddressValid, setisAddressValid] = useState(false);

    const nameHandlerInputChange = (e: any) => {
        const valuee = e.target.value; // getting the input value
        //props.selectedMode==="view"?setNameValue():setNameValue(valuee);
        setNameValue(valuee); // updating the nameValue state
        setNameError(Validate("name",valuee));
        console.log(isNameValid);
        setDetails((prevState: any) => ({ ...prevState, name: valuee }));
        // const { name, value } = e.target;
        // setDetails((prevState: any) => ({ ...prevState, [name]:value }))

    }
    const mailHandlerInputChange = (e: any) => {
        const valuee = e.target.value; // getting the input value
        setMailValue(valuee); // updating the nameValue state
        setMailError(Validate("email",valuee));
        setDetails((prevState: any) => ({ ...prevState, mail: valuee }));
    }
    const mobileHandlerInputChange = (e: any) => {
        const valuee = e.target.value; // getting the input value
        setMobileValue(valuee); // updating the nameValue state
        setMobileError(Validate("mobile",valuee));
        setDetails((prevState: any) => ({ ...prevState, mobile: valuee }));
    }
    const landlineHandlerInputChange = (e: any) => {
        const valuee = e.target.value; // getting the input value
        setLandlineValue(valuee); // updating the nameValue state
        setlandlineError(Validate("landline",valuee));
        setDetails((prevState: any) => ({ ...prevState, landline: valuee }));
    }
    const websiteHandlerInputChange = (e: any) => {
        const valuee = e.target.value; // getting the input value
        setWebsiteValue(valuee); // updating the nameValue state
        setwebsiteError(Validate("website",valuee));
        setDetails((prevState: any) => ({ ...prevState, website: valuee }));
    }
    const addressHandlerInputChange = (e: any) => {
        const valuee = e.target.value; // getting the input value
        setAddressValue(valuee); // updating the nameValue state
        setAddressError(Validate("address",valuee));
        setDetails((prevState: any) => ({ ...prevState, address: valuee }));
    }
    const [nameValue, setNameValue] = useState(details.name);
    const [mailValue, setMailValue] = useState(details.mail);
    const [mobileValue, setMobileValue] = useState(details.mobile);
    const [landlineValue, setLandlineValue] = useState(details.landline);
    const [websiteValue, setWebsiteValue] = useState(details.website);
    const [addressValue, setAddressValue] = useState(details.address);

    const submitForm = (e: any) => {
        e.preventDefault()
        if (details.name === "" || details.mail === "" || details.mobile === "" || details.landline === "" || details.website === "" || details.address === "") {
            alert("Please Enter all the Details")
            return (false)

        }
        else {
            if (nameError!==""||mailError!==""||mobileError!==""||landlineError!==""||websiteError!==""||addressError!==""){
                alert("Please Enter valid Details");
                return (false)
            }
            setForm(false);
            props.toggleForm(false);
            addContact(props.contactList,details);
        }   // getContact(details)
    }
    const updateForm=(e: any)=>{
        e.preventDefault();
        if (details.name === "" || details.mail === "" || details.mobile === "" || details.landline === "" || details.website === "" || details.address === "") {
            alert("Please Enter all the Details")
            return (false)

        }
        else {
            if (nameError!==""||mailError!==""||mobileError!==""||landlineError!==""||websiteError!==""||addressError!==""){
                alert("Please Enter valid Details");
                return (false)
            }
        setForm(false);
        props.toggleForm(false);
        props.selectedContact.name=details.name;
        props.selectedContact.mail=details.mail;
        props.selectedContact.mobile=details.mobile;
        props.selectedContact.landline=details.landline;
        props.selectedContact.website=details.website;
        props.selectedContact.address=details.address;
    }}
    return (
        <div className={formStyles.displaySection}>
            <form action="" id="form" className={formStyles.formDiv}>
                <div className={formStyles.section}>
                    <div className="label" id='section1'>
                        <label>Name</label>
                    </div>
                    <div className="textBox">
                        <input type="text" id="nameLabel" name='name' value={nameValue} onChange={nameHandlerInputChange} className={formStyles.nameLabel} />
                        <p className={formStyles.nameError}>{nameError}</p>
                    </div>
                </div>
                <div className={formStyles.section}>
                    <div className="label">
                        <label>Email</label>
                    </div>
                    <div className="textBox">
                        <input type="email" id="email" name='mail' value={mailValue} onChange={mailHandlerInputChange} className={formStyles.email} />
                        <p className={formStyles.nameError}>{mailError}</p>
                    </div>
                </div>
                <div className={formStyles.mobileSection}>
                    <div className={formStyles.section}>
                        <div className="label">
                            <label>Mobile</label>
                        </div>
                        <div className="textBox">
                            <input type="text" id="mobile" name='mobile' value={mobileValue} onChange={mobileHandlerInputChange} className={formStyles.mobile} />
                            <p className={formStyles.nameError}>{mobileError}</p>
                        </div>
                    </div>
                    <div className={formStyles.landlineSection} id="landline">
                        <div className="label">
                            <label>Landline</label>
                        </div>
                        <div className="textBox">
                            <input type="text" id="landlineText" name='landline' value={landlineValue} onChange={landlineHandlerInputChange} className={formStyles.landlineText} />
                            <p className={formStyles.nameError}>{landlineError}</p>
                        </div>
                    </div>
                </div>
                <div className={formStyles.section}>
                    <div className="label">
                        <label>Website</label>
                    </div>
                    <div className="textBox">
                        <input type="text" id="website" name='website' value={websiteValue} onChange={websiteHandlerInputChange} className={formStyles.website} />
                        <p className={formStyles.nameError}>{websiteError}</p>
                    </div>
                </div>
                <div className={formStyles.section}>
                    <div className="label">
                        <label>Address</label>
                        <p id="addressError"></p>
                    </div>
                    <div className="textBox">
                        <input type="text" id="address" name='address' value={addressValue} onChange={addressHandlerInputChange} className={formStyles.address} />
                        <p className={formStyles.nameError}>{addressError}</p>
                    </div>
                </div>
                <div className={formStyles.button}>
                    {props.selectedMode === "edit" ? (
                        <button onClick={updateForm}>Update</button>
                    ) : (
                        <button onClick={submitForm}>Add</button>
                    )}
                </div>
            </form>
        </div>
    )
}
export default DisplayForm