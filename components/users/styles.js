import css from 'styled-jsx/css';
import theme from '../theme';

export default css`
  ul {
    width: 215px;
  }
  li {
    border: ${theme.spacing(0.5)} solid ${theme.palette.tertiary};
  }
  li + li {
    border-top: none;
  }
  button {
    background: ${theme.palette.white};
    border: none;
    color: ${theme.palette.text};
    cursor: pointer;
    display: block;
    font-size: ${theme.font.size.default};
    padding: ${theme.spacing(2)};
    transition: all ease 0.5s;
    text-align: left;
    width: 100%;
  }
  button:hover {
    background: ${theme.palette.whiteHover};
  }
  strong {
    display: block;
    font-size: ${theme.font.size.subtitle};
    margin-bottom: ${theme.spacing(1)};
  }
  span {
    display: block;
    font-size: ${theme.font.size.small};
  }
  span + span {
    margin-top: ${theme.spacing(0.5)};
  }
`;
