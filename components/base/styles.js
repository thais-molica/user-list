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
  h2,
  p {
    margin: 0;
  }
  a {
    color: ${theme.palette.text};
    text-decoration: none;
  }
  button {
    font-family: ${theme.typography.primary};
  }
  .slick-prev:before,
  .slick-next:before {
    color: ${theme.palette.text};
  }
  .main-content {
    padding: 0 ${theme.spacing(2)};
    width: 100%;
  }

  @media ${theme.breakpoint.min.mobileL} {
    .main-content {
      padding-left: ${theme.spacing(4)};
      width: calc(100% - (${theme.spacing(8)} + 215px));
    }
  }
`;
