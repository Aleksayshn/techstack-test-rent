import PropTypes from 'prop-types';
import { StyledFilterDiv } from './StyledFilter';
import { DropDown } from 'components/DropDown/DropDown';

const dropDownOptions = [
  { value: '', text: 'No sorting' },
  { value: 'asc', text: 'Price - lowest to highest' },
  { value: 'desc', text: 'Price - highest to lowest' },
];

export const Filter = ({ onSortChange, selectValue }) => {
  return (
    <StyledFilterDiv>
      <DropDown
        options={dropDownOptions}
        label="Sort by:"
        onChange={onSortChange}
        value={selectValue}
      />
    </StyledFilterDiv>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  selectValue: PropTypes.string.isRequired,
};
