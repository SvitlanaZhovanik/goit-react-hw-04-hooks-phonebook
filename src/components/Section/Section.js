import PropTypes from 'prop-types';
import { Wrapper, Title } from './Section.styled';

const Section = ({ name, children }) => {
  return (
    <Wrapper>
      <Title>{name}</Title>
      {children}
    </Wrapper>
  );
};
Section.propType = {
  name: PropTypes.string,
};
export default Section;
