import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { StyledApp } from './StyledApp';
import { Form } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { List } from '../List/List';
import { testingApartments } from 'initial-db';
import useLocalStorage from 'hooks/useLocalStorage';
import { Subtitle } from 'components/Subtitle/Subtitle';

const LS_KEY = 'apartments';
const LS_KEY_FILTER = 'filter';
const LS_KEY_SORT = 'sort';

export const App = () => {
  const [apartments, setApartments] = useLocalStorage(
    LS_KEY,
    testingApartments
  );
  const [filter, setFilter] = useLocalStorage(LS_KEY_FILTER, '');
  const [sort, setSort] = useLocalStorage(LS_KEY_SORT, '');
  const [counter, setCounter] = useState(0);

  const handleFormData = ({ name, rooms, price, description }) => {
    const alreadyAdded = apartments.some(obj => obj.name === name);
    alreadyAdded
      ? Notify.failure(`Apartment ${name} has already added`)
      : setApartments(prev => [
          ...prev,
          { name, rooms, price, description, id: nanoid() },
        ]);
  };

  const handleChange = e => setFilter(e.target.value);

  const handleSort = e => {
    setSort(e.target.value);
  };

  const deleteApartment = id => {
    setApartments(prev => prev.filter(apartment => apartment.id !== id));
  };

  return (
    <StyledApp>
      <h1>Apartment Marketplace</h1>
      <Subtitle text="Create a new rent" />
      <Form onSubmit={handleFormData} />
      <Subtitle text="Available apartments" counter={counter} />
      <Filter
        value={filter}
        onChange={handleChange}
        onSortChange={handleSort}
        selectValue={sort}
      />
      <List
        heading="Apartment name / Number of  rooms / Price / Description"
        setCounter={setCounter}
        items={apartments}
        filter={filter}
        sort={sort}
        deleter={deleteApartment}
      />
    </StyledApp>
  );
};
