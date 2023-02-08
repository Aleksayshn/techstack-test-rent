import PropTypes from 'prop-types';
import { StyledForm } from './StyledForm';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';
import { Textarea } from 'components/Textarea/Textarea';

import { useFormik } from 'formik';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 99) {
    errors.name = 'Must be 99 characters or less';
  }

  if (!values.price) {
    errors.price = 'Required';
  } else if (Number(values.price) <= 0) {
    errors.price = 'Must be more than zero';
  }

  if (!values.rooms) {
    errors.rooms = 'Required';
  } else if (Number(values.rooms) <= 0) {
    errors.rooms = 'Must be more than zero';
  }

  if (values.description.length > 999) {
    errors.description = 'Must be 999 characters or less';
  }

  return errors;
};

export const Form = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      rooms: '',
      price: '',
      description: '',
    },
    validate,
    onSubmit: values => {
      formik.resetForm();
      onSubmit(values);
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Input
        label="Name"
        onChange={formik.handleChange}
        value={formik.values.name}
        type="text"
        name="name"
        placeholder="Ex. Flat in the city center"
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
        placeholder="1"
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
        placeholder="99.00"
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
        placeholder="Describe"
        onBlur={formik.handleBlur}
        isTouched={formik.touched.description}
        error={formik.errors.description}
      />
      <Button text="Submit rent" type="submit" />
    </StyledForm>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
