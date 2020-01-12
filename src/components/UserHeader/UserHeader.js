import React from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderContainer, Header, Image } from './styles';

//user.basics is all the information about me since user is the data fetched from github
const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
      //determines if we're on home page (only showing header on home page for good mobile experience)
    <HeaderContainer isHome={location.pathname === '/'}>
      <Header>
        <Image src={user.basics.picture} />
        <div>
          <h2>{user.basics.name}</h2>
          <h4>
            <a
              href={`https://gitconnected.com/${user.basics.username}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{user.basics.username}
            </a>
          </h4>
          <p>{user.basics.label}</p>
          <p>Coding in {user.basics.region}</p>
          <p>{user.basics.yearsOfExperience} years of experience as a developer</p>
          <p>{user.basics.headline}</p>
        </div>
      </Header>
    </HeaderContainer>
  );
};

export default UserHeader;