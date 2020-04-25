import css from 'styled-jsx/css';
import theme from '../theme';

export default css`
  header {
    background: ${theme.palette.primary};
    font-size: ${theme.font.size.subtitle};
    margin-bottom: ${theme.spacing(2)};
    padding: ${theme.spacing(2)};
  }
  a {
    color: ${theme.palette.white};
    display: block;
    margin: 0 auto;
  }
`;
