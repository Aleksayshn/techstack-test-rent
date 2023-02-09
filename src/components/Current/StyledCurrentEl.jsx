import styled from 'styled-components';

export const StyledCurrentEl = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #c3c6c9;
  margin: 10px 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.01);
  }
`;
