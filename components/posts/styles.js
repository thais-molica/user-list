import css from 'styled-jsx/css';
import theme from '../theme';

export default css`
  h2 {
    font-size: ${theme.font.size.title};
    margin-bottom: ${theme.spacing(1)};
    text-transform: capitalize;
  }
  li {
    border: 1px solid ${theme.palette.tertiary};
    padding: ${theme.spacing(1)};
  }
  li + li {
    margin-top: ${theme.spacing(3)};
  }
`;
