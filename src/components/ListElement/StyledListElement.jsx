import styled from 'styled-components';

export const StyledLi = styled.li`
display: flex;
justify-content: space-between;
gap: 5px;
border: 1px solid #c3c6c9; 
margin: 10px 0;
padding: 20px;
background-color: #fff;
border-radius: 5px;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover {
  transform: scale(1.01);
};
&:last-child {
  margin-bottom: 0;
};
&:first-child {
  margin-top: 0;
};
`;

export const StyleBtnBox = styled.div`
min-width: 320px;
display: flex;
align-content: center;
justify-content: space-between;
flex-wrap: wrap;
gap: 2px;
`;