import './UserList.scss';
import React, { useState, useEffect } from 'react';

import Button, { ButtonGroup } from '@atlaskit/button';

import { getUserList } from '../../../services/UserService';
import { CustomTable } from '../../../components';
import {
    DropdownItemCheckbox,
    DropdownItemGroupCheckbox,
  } from '@atlaskit/dropdown-menu';
import Dropdown from '@atlaskit/dropdown-menu';
import FilterIcon from '@atlaskit/icon/glyph/filter';
import Lozenge from '@atlaskit/lozenge';
import { Search } from 'semantic-ui-react'
import Tooltip from '@atlaskit/tooltip';

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

const UserList = () => {

    const [setUsers] = useState([]); 
    
    useEffect(() => {
        getUsers();
        async function getUsers() {
            const res = await getUserList();
            if(res && res.data) {
                setUsers(res.data);
                console.log('OK');
            }
        };
    })
    
    return(
        <div id="user-list">
            <div className="direction-path"><span>Quản lý</span> / <span>Người dùng</span></div>
            <div className="buttons-row">
                <div className="new-user-mnmt-tile">Quản lý danh sách người dùng mới</div>
                <ButtonGroup appearance="default">
                    <Button className="btn-custom left" onClick={() => {}}>Tải xuống</Button>
                    <Button className="btn-custom" onClick={() => {}}>Google Sheet</Button>
                </ButtonGroup>
            </div>
            <Search 
              style={{ marginTop: '20px' }}
              placeholder="Search"
            />
            {/* <div className="testing">
                <div className="tooltip-me">Hover over me
                    <span className="tooltiptext-me">Tooltip text</span>
                </div>
            </div> */}
            <CustomTable />
        </div>
    );
};

export default UserList;