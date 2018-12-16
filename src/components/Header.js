import React from 'react';
import Styled from 'styled-components';

const Header = () => {
  return (
    <header className='bg-black  w-100  '>
      <nav className='f6 fw6 ttu tracked'>
        <h2 className=' ml4 dib white  mr3'>Contact Manager</h2>
        <a class='mh4 link dim white  mr3   ' href='#' title='Home'>
          Home{' '}
        </a>
      </nav>
    </header>
  );
};

export default Header;

/* <a class='link dim white dib mr3' href='#' title='Home'> */
