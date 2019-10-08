import React, { useState } from 'react';

import styled from 'styled-components';
import DynamicTable from '@atlaskit/dynamic-table';
import Avatar from '@atlaskit/avatar';
import { Date } from '@atlaskit/date';
import {
  DropdownItemCheckbox,
  DropdownItemGroupCheckbox,
  DropdownItemGroup,
  DropdownItem
} from '@atlaskit/dropdown-menu';
import Dropdown from '@atlaskit/dropdown-menu';
import CalendarIcon from '@atlaskit/icon/glyph/calendar';
import FilterIcon from '@atlaskit/icon/glyph/filter';
import Lozenge from '@atlaskit/lozenge';
import { DateTimePicker } from '@atlaskit/datetime-picker';
import CustomStatusUserBlocked from '../CustomStatusUserBlocked';
import './CustomTableUserActivity.scss';
import { presidents } from '../../constants/MockData';

const getDropDownData = () => (
  <DropdownItemGroupCheckbox>
    <DropdownItemCheckbox defaultSelected id="all">ALL</DropdownItemCheckbox>
    <DropdownItemCheckbox >
      <Lozenge appearance="default">NGƯỜI DÙNG</Lozenge>
    </DropdownItemCheckbox>
    <DropdownItemCheckbox >
      <Lozenge appearance="removed">KHOÁ TÀI KHOẢN</Lozenge>
    </DropdownItemCheckbox>
  </DropdownItemGroupCheckbox>
);

const Wrapper = styled.div`
  min-width: 600p;
  width: 900px;
  margin-top: 15px;
`;

const onChange = (value) => {
  console.log('date time: ', value);
};

const createHead = (withWidth) => {
  return {
    cells: [
      {
        key: 'fullname',
        content: 'Họ & Tên',
        width: withWidth ? 1 : undefined
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
          <Dropdown
            trigger={
              <div className="calendar-container" style={{ display: 'flex' }}>
                <span id="create-date-filter" className="container-drop" tabIndex="0" style={{ marginRight: '4px' }}>
                  <CalendarIcon/>
                </span>
                <label htmlFor="create-date-filter">Thời gian</label>
              </div>
            }
          >
            <div className="hm-date-time-picker" >
              <DropdownItemGroup>
                <div className="date-title">Từ ngày</div>
                <DropdownItem className="hm-dropdown-item">
                  <DateTimePicker onChange={onChange} />
                </DropdownItem>
                <div className="date-title">Đến ngày</div>
                <DropdownItem className="hm-dropdown-item">
                  <DateTimePicker onChange={onChange} />
                </DropdownItem>
              </DropdownItemGroup>
            </div>
          </Dropdown>
        ),
        shouldTruncate: true,
        width: withWidth ? 2 : undefined
      }
    ],
  };
};

export const head = createHead(true);

function createKey(input) {
  return input ? input.replace(/^(the|a|an)/, '').replace(/\s/g, '') : input;
}

const NameWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const AvatarWrapper = styled.div`
  margin-right: 8px;
`;

const rows = presidents.map((president, index) => ({
  key: `row-${index}-${president.nm}`,
  cells: [
    {
      key: createKey(president.nm),
      content: (
        <NameWrapper>
          <div className="account-log-container">
              <AvatarWrapper className="avatar-log-wrapper">
                <Avatar
                  name={president.nm}
                  size="medium"
                  src={`https://api.adorable.io/avatars/24/${encodeURIComponent(
                    president.nm,
                  )}.png`}
                />
              </AvatarWrapper>
            <div className="user-log">
              <div className="tooltip-name">
                <a className="fullname" href="http://localhost:3000/user-management" style={{ color: '#595959' }}>{president.nm}</a>
                {president.nm && president.nm.length >= 21 && <span className="tooltiptext-name">{president.nm}</span>}
              </div>
              <div className="device-log">0989748574</div>
            </div>
          </div>
        </NameWrapper>
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
        <Date value={president.dateCreated} color={'white'} format="DD/MM" />
      )
    }
  ],
}));

const CustomTableUserActivity = () => {

  const PAGES = [...Array(10)].map((_, i) => ({
    label: i + 1,
    href: `page-${i + 1}`,
  }));

  const [page, setPage] = useState(1);

  const handleChange = (event, newPage) => setPage(newPage);

  const Pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div id="hm-custom-table-user-activity">
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
          onSort={() => console.log('onSort')}
          onSetPage={() => console.log('onSetPage')}
        />
      </Wrapper>
      {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination pages={Pages} onChange={handleChange} />
      </div> */}
    </div>
  );
};

export default CustomTableUserActivity;
