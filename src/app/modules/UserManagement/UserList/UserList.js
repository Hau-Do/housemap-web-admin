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
            <HmDateTimePicker 
              title="Ngày tạo"
              onChangeDateTimeStart={value => console.log('Created date - start: ', value)}
              onChangeDateTimeEnd={value => console.log('Created date - end: ', value)}
              onFilterRange={(start, end) => filterRangeCreatedDate(start, end)}
            />
          ),
          width: withWidth ? 10 : undefined
        },
        {
          key: 'register-date',
          content: (
            <HmDateTimePicker 
              title="Ngày ĐK"
              onChangeDateTimeStart={value => console.log('Registered date - start: ', value)}
              onChangeDateTimeEnd={value => console.log('Registered date - end: ', value)}
              onFilterRange={(start, end) => filterRangeRegisteredDate(start, end)}
            />
          ),
          shouldTruncate: true,
          width: withWidth ? 10 : undefined
        },
        {
          key: 'confirmed-date',
          content: (
            <HmDateTimePicker 
              title="Ngày duyệt"
              onChangeDateTimeStart={value => console.log('Confirmed date - start: ', value)}
              onChangeDateTimeEnd={value => console.log('Confirmed date - end: ', value)}
              onFilterRange={(start, end) => filterRangeConfirmedDate(start, end)}
            />
          ),
          shouldTruncate: true,
          width: withWidth ? 10 : undefined
        },
        {
          key: 'status',
          content: (
            <UserStatusFilter onFilterStatus={value => filterStatus(value)} />
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
    let newUsers = [...users];
    newUsers[index].status = status; 
    setUsers(newUsers);
  }

  const filterStatus = (value) => {
    if(value && value.length === 0){
      setUsers(presidents);
    } else {
      let resUsers = [];
      value.forEach((val) => {
        presidents.forEach((user) => {
          if(val.id === user.status){
            resUsers.push(user);
          }
        });
      });
      setUsers(resUsers);
    }
  }

  const filterRange = (start, end, listUser, filterBy) => {
    let resUsers = [];
    listUser.forEach((user) => {
      if(start <= user[`${filterBy}`] && user[`${filterBy}`] <= end){
        resUsers.push(user);
      }
    });
    return resUsers;
  }

  const filterRangeCreatedDate = (start, end) => {
    let filteredUsers = filterRange(start, end, presidents, 'dateCreated');
    setUsers(filteredUsers);
  }

  const filterRangeRegisteredDate = (start, end) => {
    let filteredUsers = filterRange(start, end, presidents, 'dateRegistered');
    setUsers(filteredUsers);
  }

  const filterRangeConfirmedDate = (start, end) => {
    let filteredUsers = filterRange(start, end, presidents, 'dateConfirmed');
    setUsers(filteredUsers);
  }

  return(
    <div id="user-list">
      <div className="direction-path"><span>Người dùng</span></div>
      <div className="buttons-row">
        <div className="new-user-mnmt-tile">Đang hoạt động</div>
        <Button className="btn-custom" onClick={() => console.log('clicked GG Sheet')}>Google Sheet</Button>
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