import PropTypes from 'prop-types';
import { StyledLi, StyleBtnBox } from './StyledListElement';
import { Button } from 'components/Button/Button';

export const ListElement = ({ renter, deleter, apartment, editor }) => {
  const { name, rooms, price, description, _id } = apartment;
  return (
    <StyledLi>
      <p>{name} / {rooms} rooms / ${price} / {description}</p>
      <StyleBtnBox>
        <Button type="button" onClick={() => renter(apartment)} text="Rent" />
        <Button type="button" onClick={() => editor(apartment)} text="Edit" />
        <Button type="button" onClick={() => deleter(_id)} text="Delete" />
      </StyleBtnBox>
    </StyledLi>
  );
};

ListElement.propTypes = {
  renter: PropTypes.func.isRequired,
  editor: PropTypes.func.isRequired,
  deleter: PropTypes.func.isRequired,
  apartment: PropTypes.exact({
    name: PropTypes.string.isRequired,
    rooms: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
  }),
};
