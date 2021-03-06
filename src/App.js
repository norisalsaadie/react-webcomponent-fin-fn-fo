import 'document-register-element'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../common-ui/components/ca-form';
import '../common-ui/components/ca-form.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ca-form></ca-form>
      </div>
    );
  }
  componentDidMount() {
    const caForm = document.querySelector('ca-form');
    caForm.schema = [{
        "type": "object",
        "id": "https://ca-uat-exampay-api.cfapps.io/api/testvenue/$schema",
        "title": "Cambridge Assessment trading as UCLES & OCR - Centre Invoice Payment Form",
        "description": "You are required to complete the manadatory fields below, you will then be directed to a secure PCI compliant payment portal hosted by Barclaycard This form is for Centres making credit/debit card payments for outstanding invoices. Once you have submitted the completed form and your payment has been successfully received, a receipt will be available to print",
        "$schema": "http://json-schema.org/draft-03/schema#",
        "properties": {
            "personsName": {
                "type": "string",
                "id": "order:01_name",
                "required": true,
                "maxLength": 60,
                "minLength": 1,
                "title": "Name"
            },
            "centreEmailAddress": {
                "type": "string",
                "id": "order:02_centreEmailAddress",
                "required": true,
                "maxLength": 60,
                "minLength": 1,
                "description": "Please enter an email address",
                "title": "Centre email address",
                "pattern": "^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$"
            },
            "centreTelephoneNumber": {
                "type": "number",
                "id": "order:03_centerTelephoneNumber",
                "required": true,
                "maxLength": 60,
                "minLength": 1,
                "title": "Centre telephone number"
            },
            "centreNumber": {
                "type": "string",
                "id": "order:04_centreNumber",
                "required": true,
                "description": "",
                "title": "Centre number",
                "pattern": "^[a-zA-Z0-9]{5}$"
            },
            "centreName": {
                "type": "string",
                "id": "order:05_centreName",
                "required": true,
                "maxLength": 60,
                "minLength": 1,
                "title": "Centre name"
            },
            "amount": {
                "type": "string",
                "id": "order:07_amount",
                "required": true,
                "maxLength": 50,
                "minLength": 1,
                "description": "",
                "title": "Amount",
                "pattern": "^[1-9.][0-9.]*$"
            },
            "currency": {
                "fieldName": "currency",
                "type": "string",
                "id": "order:08_currency",
                "required": true,
                "title": "Please select the currency you are using to pay",
                "enum": [
                    "GBP",
                    "USD",
                    "EUR"
                ]
            },
            "comments": {
                "type": "array",
                "id": "order:09_comments",
                "required": false,
                "description": "",
                "title": "Comments",
                "items": {
                    "type": "string",
                    "format": "textarea"
                }
            },
            "declaration": {
                "type": "boolean",
                "id": "order:10_declaration",
                "description": "I accept all responsibility.",
                "title": "Confirmation of consent",
                "required": true
            }
        }
    }];
  }
}

export default App;
