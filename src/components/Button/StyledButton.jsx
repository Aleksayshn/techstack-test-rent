import styled from 'styled-components';
import { getRandomRgbColor } from 'utils/getRandomColor';


export const StyledButton = styled.button`
  display: inline-block;
  padding: 4px 10px;
  color: #FFF;
  background-color: #48ab88;
  border: 1px solid transparent;    
  border-radius: 5px;
  letter-spacing: inherit;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);  
  :hover {
    background-color: ${getRandomRgbColor};
  }
`;

