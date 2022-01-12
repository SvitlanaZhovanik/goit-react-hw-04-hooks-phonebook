import { List } from './ContactsList.styled';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem onClick={onDeleteContact} key={id} id={id} name={name} number={number} />
        );
      })}
    </List>
  );
};
ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func,
};
export default ContactsList;
