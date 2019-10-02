import React from 'react';
import styled from 'styled-components';
import Lozenge from '@atlaskit/lozenge';
import Arrow from '@atlaskit/icon/glyph/arrow-right';
import DropdownMenu, { DropdownItemGroup, DropdownItem } from '@atlaskit/dropdown-menu';

const JiraItem = styled.div`
  align-items: center;
  display: flex;
  width: 120px;
`;

const CustomStatus = () => {

  return (
    <DropdownMenu
      defaultOpen
      triggerType="button"
      trigger="NGƯỜI DÙNG"
      onItemActivated={item => {
        // you can do allthethings here!
        console.log(item);
      }}
    >
      <DropdownItemGroup>
        <DropdownItem
          elemAfter={
            <JiraItem>
              <Arrow label="" size="small" />
              <Lozenge appearance="default">NGƯỜI DÙNG</Lozenge>
            </JiraItem>
          }
        >
          Không xử lý
        </DropdownItem>
        <DropdownItem
          elemAfter={
            <JiraItem>
              <Arrow label="" size="small" />
              <Lozenge appearance="moved">CHƯA THAM GIA</Lozenge>
            </JiraItem>
          }
        >
          Gọi mà chưa tham gia
        </DropdownItem>
        <DropdownItem
          elemAfter={
            <JiraItem>
              <Arrow label="" size="small" />
              <Lozenge appearance="inprogress">ĐĂNG KÝ BÁN</Lozenge>
            </JiraItem>
          }
        >
          Đồng ý tham gia
        </DropdownItem>
        <DropdownItem
          elemAfter={
            <JiraItem>
              <Arrow label="" size="small" />
              <Lozenge appearance="success">ĐỐI TÁC</Lozenge>
            </JiraItem>
          }
        >
          Đã duyệt hoàn tất hồ sơ
        </DropdownItem>
      </DropdownItemGroup>
    </DropdownMenu>
  );
};

export default CustomStatus;
