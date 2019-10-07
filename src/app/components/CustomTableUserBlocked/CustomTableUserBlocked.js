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
import './CustomTableUserBlocked.scss';

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
  min-width: 600px;
  width: 600px;
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
        width: withWidth ? 7 : undefined
      },
      {
        key: 'create-date',
        content: (
          <Dropdown
            trigger={
              <div className="calendar-container" style={{ display: 'flex' }}>
                <span id="create-date-filter" className="container-drop" tabIndex="0" style={{ marginRight: '4px' }}>
                  <CalendarIcon/>
                </span>
                <label htmlFor="create-date-filter">Ngày khoá</label>
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
        width: withWidth ? 5 : undefined
      },
      {
        key: 'status',
        content: (
          <Dropdown
            trigger={
              <div className="status-container" style={{ display: 'flex' }}>
                <span id="status-filter" className="container-drop" tabIndex="0" style={{ marginRight: '4px' }}>
                  <FilterIcon/>
                </span>
                <label htmlFor="status-filter">Trạng thái</label>
              </div>
            }
          >
            {getDropDownData()}
          </Dropdown>
        ),
        shouldTruncate: true,
        width: withWidth ? 1 : undefined
      },
    ],
  };
};

export const head = createHead(true);

export const presidents = [
  {
    id: 1,
    nm: 'Nguyễn Văn Hùng',
    pp: '0989748574',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 2,
    nm: 'Lê Thị Hồng Hạnh',
    pp: '0494768533',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 3,
    nm: 'Paul Vũ',
    pp: '0957928345',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 4,
    nm: 'Nguyễn Lê Hải Đăng',
    pp: '0948374533',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 5,
    nm: 'Hoàng Đăng Hải Nam',
    pp: '0948574457',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 6,
    nm: 'Nguyễn Bá Danh',
    pp: '0918928499',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 7,
    nm: 'Đỗ Gia Bảo',
    pp: '0195758475',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 8,
    nm: 'Trần Kim Hiếu',
    pp: '0769484754',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 9,
    nm: 'Nguyễn Thị Minh Ngọc',
    pp: '0558583038',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 10,
    nm: 'Trần Văn Hoài',
    pp: '0718383857',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 11,
    nm: 'Nguyễn Lê Yến Phượng',
    pp: '0909475755',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 12,
    nm: 'Trần Hoài Phong',
    pp: '0595744444',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 13,
    nm: 'Nguyễn Văn Quang',
    pp: '0494757577',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 14,
    nm: 'Nguyễn Minh Quang',
    pp: '0558474756',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 15,
    nm: 'Vũ Khắc Tâm',
    pp: '0595757442',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 16,
    nm: 'Võ Hoàng Kim',
    pp: '0595759622',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 17,
    nm: 'Trịnh Kim Ngân',
    pp: '0956228374',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 18,
    nm: 'Nguyễn Bảo Nhi',
    pp: '0354928334',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 19,
    nm: 'Vũ Dạ Kim Chi',
    pp: '0957928346',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 20,
    nm: 'Lê Thảo Nhi',
    pp: '0357928342',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 21,
    nm: 'Hoàng Khả Quỳnh',
    pp: '0757928343',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 22,
    nm: 'Đỗ Lâm Quỳnh',
    pp: '0157928342',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 23,
    nm: 'Hớn Vĩ Dân',
    pp: '0357928345',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 24,
    nm: 'Nguyễn Ngọc Thảo',
    pp: '09575528348',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 25,
    nm: 'Trần Đình Vũ',
    pp: '0856928343',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 26,
    nm: 'Trần Đình Thi',
    pp: '0357828346',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 27,
    nm: 'Lê Yến Thanh',
    pp: '0357728344',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 28,
    nm: 'Bùi Thị Nghĩa',
    pp: '0357428346',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 29,
    nm: 'Nguyễn Hoàng Minh',
    pp: '0357928344',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 30,
    nm: 'Huỳnh Hữu Tài',
    pp: '0657938343',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 31,
    nm: 'Nguyễn Thị Kim Hương',
    pp: '0357928349',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 32,
    nm: 'Võ Vô Lượng',
    pp: '0877928792',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 33,
    nm: 'Gia Cát Võ',
    pp: '0657928344',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 34,
    nm: 'Gia Cát Thần Nam',
    pp: '0342686836',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
  {
    id: 35,
    nm: 'Huỳnh Gia Khánh',
    pp: '0938453797',
    dateCreated: 1569776400000,
    dateRegistered: 1569862800000,
    dateConfirmed: 1569949200000,
  },
];

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
          <div className="account-container">
            <AvatarWrapper>
              <Avatar
                name={president.nm}
                size="medium"
                src={`https://api.adorable.io/avatars/24/${encodeURIComponent(
                  president.nm,
                )}.png`}
              />
            </AvatarWrapper>
            <div className="info-container">
              <a href="http://localhost:3000/user-management" style={{ color: '#595959' }}>{president.nm}</a>
              <div className="phone-info">0989748574</div>
            </div>
          </div>
        </NameWrapper>
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
        <CustomStatusUserBlocked/>
      )
    },
  ],
}));

const CustomTableUserBlocked = () => {

  const PAGES = [...Array(10)].map((_, i) => ({
    label: i + 1,
    href: `page-${i + 1}`,
  }));

  const [page, setPage] = useState(1);

  const handleChange = (event, newPage) => setPage(newPage);

  const Pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div id="hm-custom-table-user-blocked">
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

export default CustomTableUserBlocked;
