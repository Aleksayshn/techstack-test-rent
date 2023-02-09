
import PropTypes from 'prop-types';
import { StyledCurrentEl } from './StyledCurrentEl';
import { Button } from 'components/Button/Button';

export const CurrentEl = ({ apartment, canceler }) => {
    const { name, rooms, price, description } = apartment;

return (
    <StyledCurrentEl>
        <p>{name} / {rooms} rooms / ${price} / {description}</p>
        <Button type="button" onClick={() => canceler(name)} text="Cancel" />
    </StyledCurrentEl>
    );
}

CurrentEl.propTypes = {
    canceler: PropTypes.func.isRequired,
    apartment: PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        rooms: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string,
    }),
};