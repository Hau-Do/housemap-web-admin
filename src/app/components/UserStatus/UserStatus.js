import React, { useState } from 'react';
// import styled from 'styled-components';
// import Lozenge from '@atlaskit/lozenge';
// import Arrow from '@atlaskit/icon/glyph/arrow-right';
import './UserStatus.scss';
import { Dropdown } from 'semantic-ui-react'

// const JiraItem = styled.div`
//   align-items: center;
//   display: flex;
//   width: 120px;
// `;

const UserStatus = ({ options, value, onChangeStatus }) => {

  const [status, setStatus] = useState(value);

  const handleChange = (e, { value }) => {
    setStatus(value);
    onChangeStatus(value);
  };

  return (
    <div className="status-dropdown-item">
       <Dropdown
          onChange={handleChange}
          options={options}
          placeholder='Choose an option'
          selection
          value={status}
        />
    </div>
  );
};

export default UserStatus;
