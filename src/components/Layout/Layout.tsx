import React, { FC } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';

const Layout: FC = () => (
    <div className='container'>
      <Header />
      <Main />
    </div>
  )

export default Layout;