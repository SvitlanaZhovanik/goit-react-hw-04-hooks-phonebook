import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { toast, ToastContainer } from 'react-toastify';
import { FcDataRecovery } from 'react-icons/fc';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Title } from './App.styled.js';
import Section from './components/Section/Section';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import ContactsList from './components/ContactsList/ContactsList';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    const normalizeName = contact.name.toLowerCase();
    if (contacts.some(item => item.name.toLowerCase() === normalizeName)) {
      return toast.info(`${contact.name} is already in your contacts`, {
        icon: <FcDataRecovery size="30px" />,
      });
    }
    setContacts(prevState => [contact, ...prevState]);
  };
  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  };
  const deleteContact = event => {
    const contactId = event.currentTarget.id;
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
  };
  return (
    <Container>
      <ToastContainer position="bottom-left" theme="colored" />
      <div>
        <Title>Phonebook</Title>
        <Form onChange={addContact} />
      </div>
      <Section name="Contacts">
        <Filter
          value={filter}
          onChange={e => {
            setFilter(e.currentTarget.value);
          }}
        />
        <ContactsList contacts={getVisibleContacts()} onDeleteContact={deleteContact} />
      </Section>
    </Container>
  );
}
