import PropTypes from 'prop-types';
import { ListElement } from '../ListElement/ListElement';
import { useEffect } from 'react';
import { StyledHeading, StyledList } from './StyledList';

export const List = ({ heading, items, filter, sort, deleter, renter, editor, setCounter }) => {
  const filteredItems = items.filter(item => {
    return !filter || Number(item.rooms) === Number(filter);
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sort) {
      case 'asc':
        return a.price - b.price;
      case 'desc':
        return b.price - a.price;
      default:
        return [...filteredItems];
    }
  });

  useEffect(() => {
    setCounter(filteredItems.length);
  }, [filteredItems, setCounter]);

  return (
    <>
      <StyledHeading>{heading}</StyledHeading>
      <StyledList>
        {sortedItems.map(apartment => (
          <ListElement
            renter={renter}
            editor={editor}
            deleter={deleter}
            key={apartment.id}
            apartment={apartment}
          />
        ))}
      </StyledList>
    </>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      rooms: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string,
    })
  ),
  filter: PropTypes.string.isRequired,
  deleter: PropTypes.func.isRequired,
  editor: PropTypes.func.isRequired,
  renter: PropTypes.func.isRequired,
  sort: PropTypes.string,
  setCounter: PropTypes.func.isRequired,
};

List.defaultProps = {
  sort: 'desc'
};