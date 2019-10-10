import './UserList.scss';
import React, { useState, useEffect } from 'react';
import Button from '@atlaskit/button';
import { HmDateTimePicker, UserStatusFilter, Account, UserStatus } from '../../../components';
import { Search } from 'semantic-ui-react'
import styled from 'styled-components';
import DynamicTable from '@atlaskit/dynamic-table';
import { Date } from '@atlaskit/date';
import { presidents } from '../../../constants/MockData';



const Wrapper = styled.div`
  min-width: 600px;
  width: 900px;
  margin-top: 15px;
`;

function createKey(input) {
  return input ? input.replace(/^(the|a|an)/, '').replace(/\s/g, '') : input;
}

const UserList = () => {

  const [users, setUsers] = useState([]); 

    const createHead = (withWidth) => {
      return {
        cells: [
          {
            key: 'fullname',
            content: 'Tài khoản',
            width: withWidth ? 18 : undefined,
            isSortable: true
          },
          {
            key: 'create-date',
            content: (
              <HmDateTimePicker />
            ),
            width: withWidth ? 10 : undefined
          },
          {
            key: 'register-date',
            content: (
              <HmDateTimePicker />
            ),
            shouldTruncate: true,
            width: withWidth ? 10 : undefined
          },
          {
            key: 'confirmed-date',
            content: (
              <HmDateTimePicker />
            ),
            shouldTruncate: true,
            width: withWidth ? 10 : undefined
          },
          {
            key: 'status',
            content: (
              <UserStatusFilter />
            ),
            shouldTruncate: true,
            width: withWidth ? 1 : undefined
          },
        ],
      };
    };
    const head = createHead(true);

    const rows = users.map((president, index) => ({
      key: `row-${index}-${president.nm}`,
      cells: [
        {
          key: createKey(president.nm),
          content: (
            <Account data={president}/>
          ),
        },
        {
          key: president.id,
          content: (
            <div className="tooltip-me">
              <Date value={president.dateCreated} color={'white'} format="DD/MM" />
              <span className="tooltiptext-me">Ngày tạo 30/09/2019. Người thực hiện: Lưu Kha</span>
            </div>
          )
        },
        {
          key: president.id,
          content: (
            <div className="tooltip-me">
              <Date value={president.dateRegistered} color={'white'} format="DD/MM" />
              <span className="tooltiptext-me">Ngày đăng ký 01/10/2019. Người thực hiện: Lưu Kha</span>
            </div>
          )
        },
        {
          key: president.id,
          content: (
            <div className="tooltip-me">
              <Date value={president.dateConfirmed} color={'white'} format="DD/MM" />
              <span className="tooltiptext-me">Ngày duyệt 02/10/2019. Người thực hiện: Nguyễn Minh Khang</span>
            </div>
          )
        },
        {
          key: president.id,
          content:(
            <UserStatus value={president.status} onChangeStatus={(value) => changeStatus(index, value)}/>
          )
        },
      ],
    }));
    
    useEffect(() => {
        getUsers();
        async function getUsers() {
            // const res = await getUserList();
            // if(res && res.data) {
            //     setUsers(res.data);
            // }
            setUsers(presidents);
        };
    }, []);

    const changeStatus = (index, status) => {
      console.log('index, status: ', index, status);
      let newUsers = [...users];
      newUsers[index].status = status; 
      setUsers(newUsers);
      console.log('users: ', users);
    }

    return(
      <div id="user-list">
        <div className="direction-path"><span>Người dùng</span></div>
        <div className="buttons-row">
          <div className="new-user-mnmt-tile">Đang hoạt động</div>
          <Button className="btn-custom" onClick={() => {}}>Google Sheet</Button>
        </div>
        <Search 
          style={{ marginTop: '20px' }}
          placeholder="Search"
        />
        
        <div id="hm-custom-table">
          <Wrapper>
            <DynamicTable
              head={head}
              rows={rows}
              rowsPerPage={10}
              defaultPage={1}
              loadingSpinnerSize="large"
              isLoading={false}
              defaultSortKey="term"
              defaultSortOrder="ASC"
              onSort={(val) => console.log('Table onSort: ', val)}
              onSetPage={(page) => console.log('Table onSetPage: ', page)}
            />
          </Wrapper>
        </div>

      </div>
    );
};

export default UserList;