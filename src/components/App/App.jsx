import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { StyledApp } from './StyledApp';
import useLocalStorage from '../../hooks/useLocalStorage'
import { exampleApartments } from 'data/apartments';

import { Form } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { Subtitle } from '../Subtitle/Subtitle';
import { List } from '../List/List';
import { Current } from '../Current/Current';

const LS_KEY = 'apartments';
const LS_KEY_FILTER = 'filter';
const LS_KEY_SORT = 'sort';

export const App = () => {
  const [apartments, setApartments] = useLocalStorage(
    LS_KEY,
    exampleApartments
  );

  const [currentRent, setCurrentRent] = useLocalStorage(
    'currentRent',
    [
      {
        id: '1',
        name: 'Market square apartments 1',
        rooms: 1,
        price: 10,
        description: 'some description',
      },
    ]
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

  const handleCurrentRent = ({ name, rooms, price, description }) => {
    setCurrentRent(prev => [
      ...prev,
      { id: nanoid(), counter, name, rooms, price, description },
    ]);
  };

  const handleChange = e => setFilter(e.target.value);

  const handleSort = e => {
    setSort(e.target.value);
  };

  const deleteApartment = id => {
    setApartments(prev => prev.filter(apartment => apartment.id !== id));
  };

  const deleteRent = name => {
    setCurrentRent(prev => prev.filter(apartment => apartment.name !== name));
  };

  return (
    <StyledApp>
      <h1>Apartment Marketplace</h1>
      <h2>🤑 Create a new rent</h2>
      <Form onSubmit={handleFormData} />
      <Current
        heading="🤩 Your current rent"
        items={currentRent}
        canceler={deleteRent}
      />
      <Filter
        value={filter}
        onChange={handleChange}
        onSortChange={handleSort}
        selectValue={sort}
      />
      <Subtitle
        text="Available apartments"
        counter={counter}
      />
      <List
        setCounter={setCounter}
        items={apartments}
        filter={filter}
        sort={sort}
        deleter={deleteApartment}
        renter={handleCurrentRent}

      />
    </StyledApp>
  );
};
