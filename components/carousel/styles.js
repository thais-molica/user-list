import css from 'styled-jsx/css';
import theme from '../theme';

export default css`
  ul {
    display: flex;
  }
  li + li {
    margin-left: ${theme.spacing(1)};
  }
`;
