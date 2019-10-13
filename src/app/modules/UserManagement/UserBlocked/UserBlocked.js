import './UserBlocked.scss';
import React, { useState, useEffect } from 'react';

import Button from '@atlaskit/button';

import { getUserList } from '../../../services/UserService';
import { CustomTableUserBlocked } from '../../../components';
import { Search } from 'semantic-ui-react'

const UserBlocked = () => {

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
    }, []);

    return(
        <div id="user-list">
            <div className="direction-path"><span>Người dùng</span></div>
            <div className="buttons-row">
              <div className="new-user-mnmt-tile">Đã khoá</div>
              <Button className="btn-custom" onClick={() => {}}>Google Sheet</Button>
            </div>
            <Search 
              style={{ marginTop: '20px' }}
              placeholder="Search"
            />
            <CustomTableUserBlocked />
        </div>
    );
};

export default UserBlocked;