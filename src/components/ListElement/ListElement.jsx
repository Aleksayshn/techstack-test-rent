import PropTypes from 'prop-types';
import { StyledLi } from './StyledListElement';
import { Button } from 'components/Button/Button';

export const ListElement = ({ deleter, apartment }) => {
  const { name, rooms, price, description, id } = apartment;

  return (
    <StyledLi>
      <p>
        {name} / {rooms} rooms / ${price} / {description}
      </p>
      <Button type="button" onClick={() => deleter(id)} text="Delete" />
    </StyledLi>
  );
};

ListElement.propTypes = {
  deleter: PropTypes.func.isRequired,
  apartment: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rooms: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
  }),
};
