import React from 'react';
import Styled from 'styled-components';

const Container = Styled.header.attrs({
  className: 'bg-black  w-100'
})``;
const Navbar = Styled.nav.attrs({
  className: 'f6 fw6 ttu tracked'
})``;
// const

const Header = () => {
  return (
    <Container>
      <Navbar>
        <h2 className=' ml4 dib white  mr3'>Contact Manager</h2>
        <a className='mh4 link dim white  mr3   ' href='#' title='Home'>
          Home{' '}
        </a>
      </Navbar>
    </Container>
  );
};

export default Header;

/* <a class='link dim white dib mr3' href='#' title='Home'> */
