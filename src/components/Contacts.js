import React, { Component } from 'react';
import Contact from './Contact';

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'John',
          email: 'john@email.com',
          phone: '111-111-111'
        },
        {
          id: 2,
          name: 'Luke',
          email: 'luke@email.com',
          phone: '222-222-222'
        },
        {
          id: 3,
          name: 'Simon',
          email: 'simon@email.com',
          phone: '222-222-22'
        }
      ]
    };
  }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}
