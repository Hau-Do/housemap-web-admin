import './UserStatusFilter.scss';
import React, { useState } from 'react';
import Lozenge from '@atlaskit/lozenge';
import FilterIcon from '@atlaskit/icon/glyph/filter';
import { Checkbox } from 'semantic-ui-react';
import { Popup } from 'semantic-ui-react';

const UserStatusFilter = () => {
  const chbxList = [
    {
      label: 'NGƯỜI DÙNG',
      index: 0,
      value: false,
      color: "default"
    },
    {
      label: 'CHƯA THAM GIA',
      index: 1,
      value: false,
      color: "moved"
    },
    {
      label: 'ĐĂNG KÝ BÁN',
      index: 2,
      value: false,
      color: "inprogress"
    },
    {
      label: 'ĐỐI TÁC',
      index: 3,
      value: false,
      color: "success"
    }
  ];
  const [checkboxList, setCheckboxList] = useState(chbxList);

  const toggle = (e, data) => {
    const { name, checked } = data;
    let chbxList = [...checkboxList];
    chbxList[name].value = checked; 
    setCheckboxList(chbxList);
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
            {checkboxList.map((item) =>
              <Checkbox 
                name={item.index}
                label={<label>{item.label==='TẤT CẢ' ? 'TẤT CẢ': <Lozenge appearance={item.color}>{item.label}</Lozenge>}</label>}
                onChange={toggle}
                checked={item.value}
              />)
            }
          </div>
        }
        on='click'
        position='bottom left'
      />
    </div>
  );
};

export default UserStatusFilter;
