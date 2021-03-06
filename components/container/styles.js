import css from 'styled-jsx/css';
import theme from '../theme';

export default css`
  div {
    display: flex;
    margin: 0 auto;
    max-width: ${theme.container};
    overflow: hidden;
  }

  @media ${theme.breakpoint.min.mobileL} {
    div {
      padding: 0 ${theme.spacing(3)};
    }
  }
`;
