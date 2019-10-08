import './UserStatusFilter.scss';
import React, { useState } from 'react';
import Dropdown, 
{
  DropdownItemCheckbox,
  DropdownItemGroupCheckbox
} from '@atlaskit/dropdown-menu';
import Lozenge from '@atlaskit/lozenge';
import FilterIcon from '@atlaskit/icon/glyph/filter';


const UserStatusFilter = () => {

  const getDropDownData = () => (
    <DropdownItemGroupCheckbox>
      <DropdownItemCheckbox defaultSelected id="all">ALL</DropdownItemCheckbox>
      <DropdownItemCheckbox >
        <Lozenge appearance="default">NGƯỜI DÙNG</Lozenge>
      </DropdownItemCheckbox>
      <DropdownItemCheckbox >
        <Lozenge appearance="moved">CHƯA THAM GIA</Lozenge>
      </DropdownItemCheckbox>
      <DropdownItemCheckbox >
        <Lozenge appearance="inprogress">ĐĂNG KÝ BÁN</Lozenge>
      </DropdownItemCheckbox>
      <DropdownItemCheckbox >
        <Lozenge appearance="success">ĐỐI TÁC</Lozenge>
      </DropdownItemCheckbox>
    </DropdownItemGroupCheckbox>
  );

  return (
    <div className="user-status-filter-container">
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
    </div>
  );
};

export default UserStatusFilter;
