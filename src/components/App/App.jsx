import { useState, useEffect } from 'react';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { StyledApp } from './StyledApp';
import { Form } from '../Form/Form';
import { Current } from '../Current/Current';
import { Edit } from '../Edit/Edit';
import { Filter } from '../Filter/Filter';
import { Subtitle } from '../Subtitle/Subtitle';
import { List } from '../List/List';

export const API_URL = 'http://localhost:8080/api/apartments';

export const App = () => {
  const [apartments, setApartments] = useState([]);
  const [currentRent, setCurrentRent] = useState([]);
  const [editAparts, setEditAparts] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setApartments(res.data))
      .catch(error => console.error(error));
  }, []);

  const onSubmitFormCreate = ({ name, rooms, price, description }) => {
    const alreadyAdded = apartments.some(obj => obj.name === name);
    alreadyAdded
      ? Notify.failure(`Apartment ${name} has already added`)
      : axios.post(API_URL, { name, rooms, price, description })
        .then(res => setApartments(prev => [...prev, res.data]))
        .catch(error => console.error(error));
  };

  const onSubmitFormEdit = (id, { name, rooms, price, description }) => {
    axios.post(API_URL, { name, rooms, price, description })
      .then(res => setApartments(prev => [...prev, res.data]))
      .catch(error => console.error(error));
  };

  const onClickAddRent = ({ name, rooms, price, description, _id }) => {
    const alreadyAdded = currentRent.some(obj => obj.name === name);
    alreadyAdded
      ? Notify.failure(`Apartment ${name} has already rented`)
      : setCurrentRent(prev => [
        ...prev,
        { name, rooms, price, description, _id },
      ]);
  };

  const onClickCancelRent = name => {
    setCurrentRent(prev => prev.filter(apartment => apartment.name !== name));
  };

  const onClickAddForEdit = ({ name, rooms, price, description, _id }) => {
    setEditAparts([{ name, rooms, price, description, _id }]);
  };


  const onClickCancelEdit = () => {
    setEditAparts([]);
  };

  const handleChange = e => setFilter(e.target.value);
  const handleSort = e => setSort(e.target.value);

  const onClickDeleteApartment = id => {
    axios.delete(`${API_URL}/${id}`)
      .then(res => {
        setApartments(prev => prev.filter(apartment => apartment._id !== id));
        setCurrentRent(prev => prev.filter(apartment => apartment._id !== id));
        setEditAparts(prev => prev.filter(apartment => apartment._id !== id));
      })
      .catch(error => console.error(error));
  };


  return (
    <StyledApp>
      <h1>Apartment Marketplace</h1>
      <h2>😍 Create a new rent</h2>
      <Form onSubmit={onSubmitFormCreate} />
      <Current
        heading="⏳ Your current rent"
        items={currentRent}
        canceler={onClickCancelRent}
      />
      <Edit
        items={editAparts}
        canceler={onClickCancelEdit}
        editor={onSubmitFormEdit}
      />
      <Filter
        value={filter}
        onChange={handleChange}
        onSortChange={handleSort}
        selectValue={sort}
      />
      <Subtitle
        text="🏡 Available apartments"
        counter={counter}
      />
      <List
        setCounter={setCounter}
        items={apartments}
        filter={filter}
        sort={sort}
        deleter={onClickDeleteApartment}
        renter={onClickAddRent}
        editor={onClickAddForEdit}
      />
    </StyledApp>
  );
};


