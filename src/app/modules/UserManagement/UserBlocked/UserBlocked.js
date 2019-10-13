import './UserBlocked.scss';
import React, { useState, useEffect } from 'react';
import Button from '@atlaskit/button';
import styled from 'styled-components';
import DynamicTable from '@atlaskit/dynamic-table';
import { Input } from 'semantic-ui-react';
import { createKey, optionsBlockedStatus } from '../../../constants/Constant';
import { UserStatus, HmDateTimePicker, UserStatusFilter, Account } from '../../../components';
import { Date } from '@atlaskit/date';
import { presidents, chbxListBlockedStatus } from '../../../constants/MockData';


const Wrapper = styled.div`
  min-width: 600px;
  width: 600px;
  margin-top: 15px;
`;

const UserBlocked = () => {

    const [userBlocked, setUserBlocked] = useState([]); 
    const [keyword, setKeyword] = useState('');

    const createHead = (withWidth) => {
        return {
          cells: [
            {
              key: 'fullname',
              content: 'Họ & Tên',
              width: withWidth ? 5 : undefined
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
              shouldTruncate: true,
              width: withWidth ? 3 : undefined
            },
            {
              key: 'status',
              content: (
                <UserStatusFilter options={chbxListBlockedStatus} onFilterStatus={value => filterStatus(value)} />
              ),
              shouldTruncate: true,
              width: withWidth ? 1 : undefined
            },
          ],
        };
    };
      
    const head = createHead(true);

    const rows = userBlocked.map((president, index) => ({
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
                <span className="tooltiptext-me">Khoá lúc 30/09/2019. Người thực hiện: Nhã Thư Kỳ</span>
              </div>
            )
          },
          {
            key: president.id,
            content:(
                <UserStatus options={optionsBlockedStatus} value={president.blockedStatus} onChangeStatus={(value) => changeStatus(index, value)}/>
            )
          },
        ],
    }));
    
    useEffect(() => {
        getUsers();
        async function getUsers() {
            // const res = await getUserList();
            // if(res && res.data) {
            //     setUserBlocked(res.data);
            // }
            setUserBlocked(presidents);
        };
    }, []);

    const filterRange = (start, end, listUser, filterBy) => {
        if(!start && !end){
          return presidents;
        }
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
        setUserBlocked(filteredUsers);
    }

    const filterStatus = (value) => {
        if(value && value.length === 0){
            setUserBlocked(presidents);
        } else {
          let resUsers = [];
          value.forEach((val) => {
            presidents.forEach((user) => {
              if(val.id === user.blockedStatus){
                resUsers.push(user);
              }
            });
          });
          setUserBlocked(resUsers);
        }
    }

    const changeStatus = (index, status) => {
        let newUsers = [...userBlocked];
        newUsers[index].blockedStatus = status; 
        setUserBlocked(newUsers);
    }

    const search = (keyword) => {
        if(keyword && keyword.length > 0){
          let resUsers = [];
          presidents.forEach((user) => {
            if(user.nm.indexOf(keyword) !== -1){
              resUsers.push(user);
            }
          });
          return resUsers;
        } else {
          return presidents;
        }
    }

    const changeSearch = (e) => {
        setKeyword(e.target.value);
        let res = search(e.target.value);
        setUserBlocked(res);
    }
    
    const pressBlurSearch = (e) => {
        if (e.key === 'Enter' || e.type === 'blur') {
            let res = search(keyword);
            setUserBlocked(res);
        }
    }
    

    return(
        <div id="user-list">
            <div className="direction-path"><span>Người dùng</span></div>
            <div className="buttons-row">
              <div className="new-user-mnmt-tile">Đã khoá</div>
              <Button className="btn-custom" onClick={() => {}}>Google Sheet</Button>
            </div>
            <Input className='input-search' size="small" icon='search' type='text' 
                placeholder="Search" name='keyword' 
                value={keyword} onChange={changeSearch} 
                onKeyPress={pressBlurSearch} onBlur={pressBlurSearch}/>
            
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

export default UserBlocked;