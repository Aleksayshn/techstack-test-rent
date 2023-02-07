import { StyledButton } from './StyledButton';
import PropTypes from 'prop-types';

export const Button = ({ onClick, text, type }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
};
