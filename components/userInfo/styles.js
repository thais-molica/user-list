import css from 'styled-jsx/css';
import theme from '../theme';

export default css`
  h2 {
    font-size: ${theme.font.size.title};
    margin-bottom: ${theme.spacing(1)};
  }
  address {
    margin-bottom: ${theme.spacing(4)};
  }
`;
