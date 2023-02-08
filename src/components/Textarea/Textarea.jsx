import { StyledTextarea } from './StyledTextarea';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const Textarea = ({ label, isTouched, error, ...restProps }) => {
    const id = nanoid();

    return (
        <StyledTextarea>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} {...restProps} />
            {isTouched && error ? <div>{error}</div> : null}
        </StyledTextarea>
    );
};

Textarea.propTypes = {
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
