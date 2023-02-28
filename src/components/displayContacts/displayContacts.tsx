import ReactDOM from 'react-dom/client';
import { Component, ReactNode } from 'react';
import { useState } from 'react';
import displayContactsStyles from './displayContacts.module.css';

const DisplayContacts = () => {
    return (
        <div className={displayContactsStyles.contactSection}>
            <div className={displayContactsStyles.contacts}>
                <h2>CONTACTS</h2>
            </div>
            <div id="chk"></div>
        </div>)
}
export default DisplayContacts