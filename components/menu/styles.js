import css from 'styled-jsx/css';
import theme from '../theme';

export default css`
  li {
    cursor: pointer;
  }
  li + li {
      margin-top: ${theme.spacing(2)};
  }
  button {
    background: none;
    border: none;
    font-size: ${theme.font.size.default};
    padding: 0;
    text-align: left;
  }
  strong: {
    display: block;
  }
  span {
    display: block;
  }
`;
