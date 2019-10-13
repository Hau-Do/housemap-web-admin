import React from 'react';
import Lozenge from '@atlaskit/lozenge';
import Arrow from '@atlaskit/icon/glyph/arrow-right';
import styled from 'styled-components';

const JiraItem = styled.div`
  align-items: center;
  display: flex;
  width: 120px;
`;

export const LOCAL_STORAGE = {
    AUTH_TOKEN: "auth_token",
    AUTH_TOKEN_EXPIRES_AT: "token_expires_at",
};

export function createKey(input) {
    return input ? input.replace(/^(the|a|an)/, '').replace(/\s/g, '') : input;
}

export const optionsActiveStatus = [
    {
      key: 's1',
      text:  
        <JiraItem>
          <Lozenge appearance="default">NGƯỜI DÙNG</Lozenge>
        </JiraItem>,
      label: <div><span>Không xử lý</span> <Arrow label="" size="small" /></div>,
      value: 'status-1'
    },
    {
      key: 's2',
      text:  
        <JiraItem>
          <Lozenge appearance="moved">CHƯA THAM GIA</Lozenge>
        </JiraItem>,
      label: <div><span>Gọi mà chưa tham gia</span> <Arrow label="" size="small" /></div>,
      value: 'status-2'
    },
    {
      key: 's3',
      text:  
        <JiraItem>
          <Lozenge appearance="inprogress">ĐĂNG KÝ BÁN</Lozenge>
        </JiraItem>,
      label: <div><span>Đồng ý tham gia</span> <Arrow label="" size="small" /></div>,
      value: 'status-3'
    },
    {
      key: 's4',
      text:  
        <JiraItem>
          <Lozenge appearance="success">ĐỐI TÁC</Lozenge>
        </JiraItem>,
      label: <div><span>Đã duyệt hoàn tất hồ sơ</span> <Arrow label="" size="small" /></div>,
      value: 'status-4'
    },
];

export const optionsBlockedStatus = [
    {
      key: 's1',
      text:  
        <JiraItem>
          <Lozenge appearance="default">NGƯỜI DÙNG</Lozenge>
        </JiraItem>,
      label: <div><span>Mở khoá</span> <Arrow label="" size="small" /></div>,
      value: 'status-1'
    },
    {
      key: 's2',
      text:  
        <JiraItem>
          <Lozenge appearance="removed">KHOÁ TÀI KHOẢN</Lozenge>
        </JiraItem>,
      label: <div><span>Vi phạm điều khoản</span> <Arrow label="" size="small" /></div>,
      value: 'status-5'
    },
];
