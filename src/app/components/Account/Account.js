import './Account.scss';
import React from 'react';
import styled from 'styled-components';
import Avatar from '@atlaskit/avatar';


const NameWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const AvatarWrapper = styled.div`
  margin-right: 8px;
`;

const Account = ({data}) => {

  return (
    <div className="account-container">
      <NameWrapper>
        <div className="account-user-container">
          <AvatarWrapper className="avatar-log-wrapper">
            <Avatar
              name={data.nm}
              size="medium"
              src={`https://api.adorable.io/avatars/24/${encodeURIComponent(
                data.nm,
              )}.png`}
            />
          </AvatarWrapper>
          <div className="user-container">
            {/* <a href="http://localhost:3000/user-management" style={{ color: '#595959' }}>{data.nm}</a>
            <div className="user-phone">{data.pp}</div> */}
            <div className="tooltip-name">
              <a className="fullname" href="http://localhost:3000/user-management" style={{ color: '#595959' }}>{data.nm}</a>
              {data.nm && data.nm.length >= 21 && <span className="tooltiptext-name">{data.nm}</span>}
            </div>
            <div className="device-log">{data.pp}</div>
          </div>
        </div>
      </NameWrapper>
    </div>
  );
};

export default Account;
