import './UserStatusFilter.scss';
import React, { useState } from 'react';
import Dropdown, 
{
  DropdownItemCheckbox,
  DropdownItemGroupCheckbox
} from '@atlaskit/dropdown-menu';
import Lozenge from '@atlaskit/lozenge';
import FilterIcon from '@atlaskit/icon/glyph/filter';
import { Checkbox } from 'semantic-ui-react';
import { Popup } from 'semantic-ui-react'


const UserStatusFilter = () => {

  const [checkUser, setCheckUser] = useState(false);
  const [checkNotJoin, setCheckNotJoin] = useState(false);
  const [checkRegisterSell, setCheckRegisterSell] = useState(false);
  const [checkPartner, setCheckPartner] = useState(false);

  const toggle = (e, data) => {
    const { name, checked } = data;
    switch(name) {
      case 'status-1': 
        setCheckUser(checked);
        break;
      case 'status-2': 
        setCheckNotJoin(checked);
        break;
      case 'status-3': 
        setCheckRegisterSell(checked);
        break;
      case 'status-4': 
        setCheckPartner(checked);
        break;
    }
  }

  return (
    <div className="user-status-filter-container">
      <Popup
        trigger={
          <div className="status-container" style={{ display: 'flex' }}>
            <span id="status-filter" className="container-drop" tabIndex="0" style={{ marginRight: '4px' }}>
              <FilterIcon/>
            </span>
            <label htmlFor="status-filter">Trạng thái</label>
          </div>
        }
        content={
          <div className="checkbox-item-container" style={{ display: 'inline-grid' }}>
            <Checkbox 
              name="status-1"
              label={<label><Lozenge appearance="default">NGƯỜI DÙNG</Lozenge></label>}
              onChange={toggle}
              checked={checkUser}
            />
            <Checkbox 
              name="status-2"
              label={<label><Lozenge appearance="moved">CHƯA THAM GIA</Lozenge></label>}
              onChange={toggle}
              checked={checkNotJoin}
            />
            <Checkbox 
              name="status-3"
              label={<label><Lozenge appearance="inprogress">ĐĂNG KÝ BÁN</Lozenge></label>}
              onChange={toggle}
              checked={checkRegisterSell}
            />
            <Checkbox 
              name="status-4"
              label={<label><Lozenge appearance="success">ĐỐI TÁC</Lozenge></label>}
              onChange={toggle}
              checked={checkPartner}
            />
          </div>
        }
        on='click'
        position='bottom left'
      />
    </div>
  );
};

export default UserStatusFilter;
