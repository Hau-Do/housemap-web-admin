import React, { useState } from 'react';
import styled from 'styled-components';
import Lozenge from '@atlaskit/lozenge';
import Arrow from '@atlaskit/icon/glyph/arrow-right';
import './UserStatus.scss';
import { Dropdown } from 'semantic-ui-react'


const JiraItem = styled.div`
  align-items: center;
  display: flex;
  width: 120px;
`;

const UserStatus = () => {

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
      label: <div><span>Không xử lý</span> <Arrow label="" size="small" /></div>,
      value: 'status-1'
    },
    {
      key: 's2',
      text:  
        <JiraItem>
          <Lozenge appearance="moved">CHƯA THAM GIA</Lozenge>
        </JiraItem>,
      label: <div><span>Gọi mà chưa tham gia</span> <Arrow label="" size="small" /></div>,
      value: 'status-2'
    },
    {
      key: 's3',
      text:  
        <JiraItem>
          <Lozenge appearance="inprogress">ĐĂNG KÝ BÁN</Lozenge>
        </JiraItem>,
      label: <div><span>Đồng ý tham gia</span> <Arrow label="" size="small" /></div>,
      value: 'status-3'
    },
    {
      key: 's4',
      text:  
        <JiraItem>
          <Lozenge appearance="success">ĐỐI TÁC</Lozenge>
        </JiraItem>,
      label: <div><span>Đã duyệt hoàn tất hồ sơ</span> <Arrow label="" size="small" /></div>,
      value: 'status-4'
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

export default UserStatus;
