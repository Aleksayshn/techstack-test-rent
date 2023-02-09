import PropTypes from 'prop-types';
import { CurrentEl } from './CurrentEl';
import { StyledHeading, StyledCurrent } from './StyledCurrent';

export const Current = ({ heading, items, canceler }) => {
    return (
        <>
        <StyledHeading>{heading}</StyledHeading>
        <StyledCurrent>
            {items.map(apartment => (
            <CurrentEl
            canceler={canceler}
            apartment={apartment}
            />
            ))}
        </StyledCurrent>
        </>
    );
};

Current.propTypes = {
    heading: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            rooms: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string,
        })
    ),
    canceler: PropTypes.func.isRequired,
};
