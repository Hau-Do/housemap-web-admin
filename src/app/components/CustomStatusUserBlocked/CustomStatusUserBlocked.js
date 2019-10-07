import React, { useState } from 'react';
import styled from 'styled-components';
import Lozenge from '@atlaskit/lozenge';
import Arrow from '@atlaskit/icon/glyph/arrow-right';
import DropdownMenu, { DropdownItemGroup, DropdownItem } from '@atlaskit/dropdown-menu';
import './CustomStatusUserBlocked.scss';
import { CreatableSelect } from '@atlaskit/select';
import { Dropdown } from 'semantic-ui-react'


const JiraItem = styled.div`
  align-items: center;
  display: flex;
  width: 120px;
`;

const CustomStatusUserBlocked = () => {

  const [status, setStatus] = useState('status-1');

  const handleChange = (e, { value }) => {
    setStatus(value);
  };

  const options = [
    {
      key: 's1',
      text:  
        <JiraItem>
          <Lozenge appearance="default">NGƯỜI DÙNG</Lozenge>
        </JiraItem>,
      label: <div><span>Mở khoá</span> <Arrow label="" size="small" /></div>,
      value: 'status-1'
    },
    {
      key: 's2',
      text:  
        <JiraItem>
          <Lozenge appearance="removed">KHOÁ TÀI KHOẢN</Lozenge>
        </JiraItem>,
      label: <div><span>Vi phạm điều khoản</span> <Arrow label="" size="small" /></div>,
      value: 'status-2'
    },
  ];

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

export default CustomStatusUserBlocked;
