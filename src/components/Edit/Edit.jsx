import PropTypes from 'prop-types';
import { EditEl } from './EditEl';

export const Edit = ({ heading, items, canceler, editor }) => {
    return (
        <>
            {items.map(apartment =>
            (<EditEl
                canceler={canceler}
                editor={editor}
                apartment={apartment}
            />
            ))}
        </>
    );
};

Edit.propTypes = {
    heading: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.exact({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            rooms: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string,
        })
    ),
    canceler: PropTypes.func.isRequired,
};
