import css from 'styled-jsx/css';
import theme from '../theme';

export default css`
  li {
    border: ${theme.spacing(0.5)} solid ${theme.palette.tertiary};
  }
  li + li {
    border-top: none;
  }
  .user-btn {
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
  .user-btn:hover {
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
  .mbl-btn {
    left: 10px;
    position: absolute;
    top: 10px;
  }
  .opened-menu {
    display: block;
    left: 10px;
    position: absolute;
    right: 10px;
    z-index: 9;
  }

  @media ${theme.breakpoint.min.mobileL} {
    ul {
      width: 215px;
    }
  }

  @media ${theme.breakpoint.max.mobileL} {
    ul {
      display: none;
    }
  }
`;
