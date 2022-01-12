import { Label, Input } from '../Form/Form.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name:
      <Input
        type="text"
        placeholder="Please enter the required name"
        value={value}
        onChange={onChange}
      />
    </Label>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
export default Filter;
