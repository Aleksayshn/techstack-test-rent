import { StyledSubtitle } from './StyledSubtitle';
import PropTypes from 'prop-types';

export const Subtitle = ({ text, counter }) => {
    return (
        <StyledSubtitle>
            {text}
            {counter ? ` (${counter})` : ` (no one available)`}
        </StyledSubtitle>
    );
};

Subtitle.propTypes = {
    text: PropTypes.string.isRequired,
    counter: PropTypes.number,
};