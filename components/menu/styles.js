import css from 'styled-jsx/css';
import theme from '../theme';

export default css`
  nav {
    margin-bottom: ${theme.spacing(2)};
  }
  ul {
    display: flex;
  }
  li + li {
    margin-left: ${theme.spacing(2)};
  }
  a {
    font-size: ${theme.font.size.subtitle};
    font-weight: bold;
    transition: all ease 0.5s;
  }
  a:hover {
    opacity: 0.7;
  }
`;
