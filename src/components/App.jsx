import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormContact } from './FormContact/FormContact';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, id, number }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
    const contactsLists = [...this.state.contacts];

    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      contactsLists.push({ name, id, number });
    }
    this.setState({ contacts: contactsLists });
  };

  changeFilter = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <FormContact onSubmit={this.addContact} />
        <h2>Contacts</h2>
        {contacts.length > 1 && (
          <ContactFilter filter={filter} onChange={this.handleChange} />
        )}
        <Contacts
          contacts={this.changeFilter()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
