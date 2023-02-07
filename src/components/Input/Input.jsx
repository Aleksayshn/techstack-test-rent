import { StyledInput } from './StyledInput';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const Input = ({ label, isTouched, error, ...restProps }) => {
  const id = nanoid();

  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...restProps} />
      {isTouched && error ? <div>{error}</div> : null}
    </StyledInput>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onBlur: PropTypes.func,
  isTouched: PropTypes.bool,
  error: PropTypes.string,
};
