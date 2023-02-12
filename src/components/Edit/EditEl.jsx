import PropTypes from 'prop-types';

import { StyledEditEl } from './StyledEditEl';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';
import { Textarea } from 'components/Textarea/Textarea';
import { validate } from 'components/Form/Form';
import { useFormik } from 'formik';

export const EditEl = ({ apartment, canceler, editor }) => {
    const { name, rooms, price, description, _id } = apartment;
    const formik = useFormik({
        initialValues: {
            name: name,
            rooms: rooms,
            price: price,
            description: description,
        },
        validate,
        onSubmit: values => {
            editor(_id, values);
        },
    });
    return (
        <StyledEditEl onSubmit={formik.handleSubmit}>
            <p>Edit:</p>
            <Input
                label="Name"
                onChange={formik.handleChange}
                value={formik.values.name}
                type="text"
                name="name"
                required
                onBlur={formik.handleBlur}
                isTouched={formik.touched.name}
                error={formik.errors.name}
            />
            <Input
                label="Rooms"
                onChange={formik.handleChange}
                value={formik.values.rooms}
                type="number"
                name="rooms"
                required
                onBlur={formik.handleBlur}
                isTouched={formik.touched.rooms}
                error={formik.errors.rooms}
            />
            <Input
                label="Rent Price"
                onChange={formik.handleChange}
                value={formik.values.price}
                type="number"
                name="price"
                required
                onBlur={formik.handleBlur}
                isTouched={formik.touched.price}
                error={formik.errors.price}
            />
            <Textarea
                label="Description"
                onChange={formik.handleChange}
                value={formik.values.description}
                type="text"
                name="description"
                onBlur={formik.handleBlur}
                isTouched={formik.touched.description}
                error={formik.errors.description}
            />
            <Button type="submit" text="Submit edit" />
            <Button type="button" onClick={() => canceler(name)} text="Cancel" />
        </StyledEditEl>

    );
};

EditEl.propTypes = {
    apartment: PropTypes.shape({
        name: PropTypes.string.isRequired,
        rooms: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired
    }).isRequired,
    canceler: PropTypes.func.isRequired,
    editor: PropTypes.func.isRequired
};