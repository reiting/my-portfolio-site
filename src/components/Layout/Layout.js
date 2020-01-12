import React from 'react';
import Sidebar from '../Sidebar';
import UserHeader from '../UserHeader';
import MobileNav from '../MobileNav';

import { StyledContent } from './styles';
//setting all my components up
const Layout = ({ user, children }) => {
  return (
    <>
      <MobileNav />
      <Sidebar />
      <StyledContent>
        <UserHeader user={user} />
        <div>{children}</div>
      </StyledContent>
    </>
  );
};

export default Layout;