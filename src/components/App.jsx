import { Component } from "react";
import { ContactList } from './ContactList/ContactList'
import {Filter} from './Filter/Filter'
import {ContactForm} from "./ContactForm/ContactForm";
import initialContacts from './contacts.json'
import { Wrapper } from './App.styled'

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: ''
  }

  handleChange = e => {
    this.setState({filter: e.target.value});
  }

  handleSubmit = data => {
    const {contacts} = this.state;
    const contactName = contacts.find(
      contact => contact.name === data.name.trim()
    )
    if (!contactName){
      this.setState(prevState =>({
        contacts: [data, ...prevState.contacts],
      }))
    } else {
      return alert(`${contactName.name} is already in contacts.`)
    }
  }

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    )
  }
  
  render(){
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit}/>
        <h2>Contacts</h2>
        <Filter value={this.filter} onChange={this.handleChange}/>
        <ContactList filtered={this.getFilteredContacts()} onDelete={this.handleDelete}/>
      </Wrapper>
  )}
};
