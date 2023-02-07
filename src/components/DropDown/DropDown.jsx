import { StyledDropDown } from './StyledDropDown';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const DropDown = ({ options, label, value, onChange }) => {
  const id = nanoid();

  return (
    <StyledDropDown>
      <label htmlFor={id}>{label}</label>
      <select value={value} id={id} onChange={onChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </StyledDropDown>
  );
};

DropDown.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};
