import css from 'styled-jsx/css';
import theme from '../theme';

export default css`
  button {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    padding: ${theme.spacing(0.5)};
  }
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }
  .highlight-img {
    margin-bottom: ${theme.spacing(4)};
  }
`;
