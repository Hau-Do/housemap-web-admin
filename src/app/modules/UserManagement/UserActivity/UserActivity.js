import './UserActivity.scss';
import React, { useState, useEffect } from 'react';

import Button, { ButtonGroup } from '@atlaskit/button';

import { getUserList } from '../../../services/UserService';
import { CustomTableUserActivity } from '../../../components';
import {
    DropdownItemCheckbox,
    DropdownItemGroupCheckbox,
  } from '@atlaskit/dropdown-menu';
import Lozenge from '@atlaskit/lozenge';
import { Search } from 'semantic-ui-react'
import { DateTimePicker } from '@atlaskit/datetime-picker';

const getDropDownData = () => (
    <DropdownItemGroupCheckbox>
      <DropdownItemCheckbox defaultSelected id="all">ALL</DropdownItemCheckbox>
      <DropdownItemCheckbox >
        <Lozenge appearance="default">NGƯỜI DÙNG</Lozenge>
      </DropdownItemCheckbox>
      <DropdownItemCheckbox >
        <Lozenge appearance="moved">CHƯA THAM GIA</Lozenge>
      </DropdownItemCheckbox>
      <DropdownItemCheckbox >
        <Lozenge appearance="inprogress">ĐĂNG KÝ BÁN</Lozenge>
      </DropdownItemCheckbox>
      <DropdownItemCheckbox >
        <Lozenge appearance="success">ĐỐI TÁC</Lozenge>
      </DropdownItemCheckbox>
    </DropdownItemGroupCheckbox>
  );

const UserActivity = () => {

    const [setUsers] = useState([]); 
    // const [date, setDate] = useState(new Date());
    
    useEffect(() => {
        getUsers();
        async function getUsers() {
            const res = await getUserList();
            if(res && res.data) {
                setUsers(res.data);
                console.log('OK');
            }
        };
    });

    // const onChange = (value) => {
    //   console.log('UserList - date time: ', value);
    //   setDate(value);
    // };
    
    return(
        <div id="user-list">
            <div className="direction-path"><span>Người dùng</span></div>
            <div className="buttons-row">
              <div className="new-user-mnmt-tile">Nhật ký hoạt động</div>
              <Button className="btn-custom" onClick={() => {}}>Google Sheet</Button>
            </div>
            {/* <DateTimePicker onChange={onChange} timeIsEditable value={date}/> */}
            <Search 
              style={{ marginTop: '20px' }}
              placeholder="Search"
            />
            <CustomTableUserActivity />
        </div>
    );
};

export default UserActivity;