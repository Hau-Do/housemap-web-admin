import './CustomTable.scss';
import React, { useState } from 'react';
import styled from 'styled-components';
import DynamicTable from '@atlaskit/dynamic-table';
import { Date } from '@atlaskit/date';
import UserStatus from '../UserStatus';
import UserStatusFilter from '../UserStatusFilter';
import HmDateTimePicker from '../HmDateTimePicker';
import Account from '../Account';
import { presidents } from '../../constants/MockData';


const Wrapper = styled.div`
  min-width: 600px;
  width: 900px;
  margin-top: 15px;
`;

function createKey(input) {
  return input ? input.replace(/^(the|a|an)/, '').replace(/\s/g, '') : input;
}

const CustomTable = () => {

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

  const rows = presidents.map((president, index) => ({
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
          <UserStatus/>
        )
      },
    ],
  }));

  const head = createHead(true);

  return (
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
  );
};

export default CustomTable;
