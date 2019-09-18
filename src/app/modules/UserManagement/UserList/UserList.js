import './UserList.scss';
import React, { useState, useEffect } from 'react';
import { getUserList } from '../../../services/UserService';



const UserList = () => {

    const [users, setUsers] = useState([]);  
    
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
            <h2>User List</h2>
            { users.map(user => (
                <div>{user.name}</div>
            ))}
        </div>
       
    );
};

export default UserList;