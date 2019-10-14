import './UserActivity.scss';
import React, { useState, useEffect } from 'react';
import Button from '@atlaskit/button';
import styled from 'styled-components';
import DynamicTable from '@atlaskit/dynamic-table';
import { Input } from 'semantic-ui-react'
import { presidents } from '../../../constants/MockData';
import { Account, HmDateTimePicker } from '../../../components';
import { Date } from '@atlaskit/date';
import { createKey } from '../../../constants/Constant';


const Wrapper = styled.div`
  min-width: 600px;
  width: 900px;
  margin-top: 15px;
`;

const UserActivity = () => {

    const [userActivity, setUserActivity] = useState([]); 
    const [keyword, setKeyword] = useState('');
    

    const createHead = (withWidth) => {
        return {
          cells: [
            {
              key: 'fullname',
              content: 'Họ & Tên',
              width: withWidth ? 1 : undefined,
              isSortable: true
            },
            {
              key: 'device',
              content: 'Thiết bị',
              width: withWidth ? 6 : undefined
            },
            {
              key: 'ip',
              content: 'IP',
              width: withWidth ? 2 : undefined
            },
            {
              key: 'version-app',
              content: 'Version app',
              width: withWidth ? 2 : undefined
            },
            {
              key: 'log-time',
              content: (
                <HmDateTimePicker 
                    title="Thời gian"
                    onChangeDateTimeStart={value => console.log('Time - start: ', value)}
                    onChangeDateTimeEnd={value => console.log('Time - end: ', value)}
                    onFilterRange={(start, end) => filterRangeTime(start, end)}
                />
              ),
              shouldTruncate: true,
              width: withWidth ? 2 : undefined
            }
          ],
        };
    };
      
    const head = createHead(true);

    const rows = userActivity.map((president, index) => ({
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
                  <div>iPhone 6s Plus - iOS 13.1.2</div>
                )
            },
            {
                key: president.id,
                content: (
                  <div>10.11.219.157</div>
                )
            },
            {
                key: president.id,
                content: (
                  <div>SM v1.1</div>
                )
            },
            {
                key: president.id,
                content: (
                  <Date value={president.dateRegistered} color={'white'} format="DD/MM" />
                )
            }
        ],
    }));

    useEffect(() => {
        getUsers();
        async function getUsers() {
            // const res = await getUserList();
            // if(res && res.data) {
            //     setUsers(res.data);
            // }
            setUserActivity(presidents);
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

    const filterRangeTime = (start, end) => {
        let filteredUsers = filterRange(start, end, presidents, 'dateRegistered');
        setUserActivity(filteredUsers);
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
        setUserActivity(res);
      }
    
      const pressBlurSearch = (e) => {
        if (e.key === 'Enter' || e.type === 'blur') {
          let res = search(keyword);
          setUserActivity(res);
        }
      }
    
    return(
        <div id="user-list">
            <div className="direction-path"><span>Người dùng</span></div>
            <div className="buttons-row">
              <div className="new-user-mnmt-tile">Nhật ký hoạt động</div>
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

export default UserActivity;