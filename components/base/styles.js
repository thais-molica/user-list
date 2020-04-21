import css from 'styled-jsx/css';
import theme from '../theme';

export default css.global`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500');
  @import url('https://fonts.googleapis.com/css?family=Lato:400,500');
  * {
    box-sizing: border-box;
  }
  body {
    color: ${theme.palette.text};
    font-family: ${theme.typography.primary};
    font-size: ${theme.font.size.default};
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  h1,
  h2 {
    margin: 0;
  }
  a {
    color: ${theme.palette.text};
    text-decoration: none;
  }
  button {
    font-family: ${theme.typography.primary};
  }
`;
