import './UserList.scss';
import React, { useState, useEffect } from 'react';

import Button, { ButtonGroup } from '@atlaskit/button';

import { getUserList } from '../../../services/UserService';
import { CustomTable } from '../../../components';

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
            <CustomTable />
        </div>
    );
};

export default UserList;