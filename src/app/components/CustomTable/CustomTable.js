import React from 'react';

import styled from 'styled-components';
import DynamicTable from '@atlaskit/dynamic-table';
import Avatar from '@atlaskit/avatar';
import DropdownMenu, {
  DropdownItemGroup,
  DropdownItem,
} from '@atlaskit/dropdown-menu';

const Wrapper = styled.div`
  min-width: 600px;
`;

const createHead = (withWidth) => {
  return {
    cells: [
      {
        key: 'name',
        content: 'Name',
        isSortable: true,
        width: withWidth ? 25 : undefined,
      },
      {
        key: 'party',
        content: 'Party',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 15 : undefined,
      },
      {
        key: 'term',
        content: 'Term',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 10 : undefined,
      },
      {
        key: 'content',
        content: 'Comment',
        shouldTruncate: true,
      },
      {
        key: 'more',
        shouldTruncate: true,
      },
    ],
  };
};

export const head = createHead(true);

export const presidents = [
  {
    id: 1,
    nm: 'George Washington',
    pp: 'None, Federalist',
    tm: '1789-1797',
  },
  {
    id: 2,
    nm: 'John Adams',
    pp: 'Federalist',
    tm: '1797-1801',
  },
  {
    id: 3,
    nm: 'Thomas Jefferson',
    pp: 'Democratic-Republican',
    tm: '1801-1809',
  },
  {
    id: 4,
    nm: 'James Madison',
    pp: 'Democratic-Republican',
    tm: '1809-1817',
  },
  {
    id: 5,
    nm: 'James Monroe',
    pp: 'Democratic-Republican',
    tm: '1817-1825',
  },
  {
    id: 6,
    nm: 'John Quincy Adams',
    pp: 'Democratic-Republican',
    tm: '1825-1829',
  },
  {
    id: 7,
    nm: 'Andrew Jackson',
    pp: 'Democrat',
    tm: '1829-1837',
  },
  {
    id: 8,
    nm: 'Martin van Buren',
    pp: 'Democrat',
    tm: '1837-1841',
  },
  {
    id: 9,
    nm: 'William H. Harrison',
    pp: 'Whig',
    tm: '1841',
  },
  {
    id: 10,
    nm: 'John Tyler',
    pp: 'Whig',
    tm: '1841-1845',
  },
  {
    id: 11,
    nm: 'James K. Polk',
    pp: 'Democrat',
    tm: '1845-1849',
  },
  {
    id: 12,
    nm: 'Zachary Taylor',
    pp: 'Whig',
    tm: '1849-1850',
  },
  {
    id: 13,
    nm: 'Millard Fillmore',
    pp: 'Whig',
    tm: '1850-1853',
  },
  {
    id: 14,
    nm: 'Franklin Pierce',
    pp: 'Democrat',
    tm: '1853-1857',
  },
  {
    id: 15,
    nm: 'James Buchanan',
    pp: 'Democrat',
    tm: '1857-1861',
  },
  {
    id: 16,
    nm: 'Abraham Lincoln',
    pp: 'Republican',
    tm: '1861-1865',
  },
  {
    id: 17,
    nm: 'Andrew Johnson',
    pp: 'National Union',
    tm: '1865-1869',
  },
  {
    id: 18,
    nm: 'Ulysses S. Grant',
    pp: 'Republican',
    tm: '1869-1877',
  },
  {
    id: 19,
    nm: 'Rutherford Hayes',
    pp: 'Republican',
    tm: '1877-1881',
  },
  {
    id: 20,
    nm: 'James Garfield',
    pp: 'Republican',
    tm: '1881',
  },
  {
    id: 21,
    nm: 'Chester Arthur',
    pp: 'Republican',
    tm: '1881-1885',
  },
  {
    id: 22,
    nm: 'Grover Cleveland',
    pp: 'Democrat',
    tm: '1885-1889',
  },
  {
    id: 23,
    nm: 'Benjamin Harrison',
    pp: 'Republican',
    tm: '1889-1893',
  },
  {
    id: 24,
    nm: 'Grover Cleveland',
    pp: 'Democrat',
    tm: '1893-1897',
  },
  {
    id: 25,
    nm: 'William McKinley',
    pp: 'Republican',
    tm: '1897-1901',
  },
  {
    id: 26,
    nm: 'Theodore Roosevelt',
    pp: 'Republican',
    tm: '1901-1909',
  },
  {
    id: 27,
    nm: 'William Taft',
    pp: 'Republican',
    tm: '1909-1913',
  },
  {
    id: 28,
    nm: 'Woodrow Wilson',
    pp: 'Democrat',
    tm: '1913-1921',
  },
  {
    id: 29,
    nm: 'Warren Harding',
    pp: 'Republican',
    tm: '1921-1923',
  },
  {
    id: 30,
    nm: 'Calvin Coolidge',
    pp: 'Republican',
    tm: '1923-1929',
  },
  {
    id: 31,
    nm: 'Herbert C. Hoover',
    pp: 'Republican',
    tm: '1929-1933',
  },
  {
    id: 32,
    nm: 'Franklin Delano Roosevelt',
    pp: 'Democrat',
    tm: '1933-1945',
  },
  {
    id: 33,
    nm: 'Harry S Truman',
    pp: 'Democrat',
    tm: '1945-1953',
  },
  {
    id: 34,
    nm: 'Dwight David Eisenhower',
    pp: 'Republican',
    tm: '1953-1961',
  },
  {
    id: 35,
    nm: 'John Fitzgerald Kennedy',
    pp: 'Democrat',
    tm: '1961-1963',
  },
];

function createKey(input) {
  return input ? input.replace(/^(the|a|an)/, '').replace(/\s/g, '') : input;
}

function iterateThroughLorem(index) {
  return index > lorem.length ? index - lorem.length : index;
}

const NameWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const AvatarWrapper = styled.div`
  margin-right: 8px;
`;

const lorem = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Suspendisse tincidunt vehicula eleifend.',
  'Nunc tristique nisi tortor, at pretium purus interdum sed.',
  'Sed vel augue sit amet sapien elementum bibendum. Aenean aliquam elementum dui, quis euismod metus ultrices ut.',
  'Curabitur est sapien, feugiat vel est eget, molestie suscipit nibh.',
  'Nunc libero orci, lacinia id orci aliquam, pharetra facilisis leo.',
  'Quisque et turpis nec lacus luctus ultrices quis vel nisi.',
  'Cras maximus ex lorem, sit amet bibendum nibh placerat eu.',
  'In hac habitasse platea dictumst. ',
  'Duis molestie sem vel ante varius, rhoncus pretium arcu dictum.',
];

const rows = presidents.map((president, index) => ({
  key: `row-${index}-${president.nm}`,
  cells: [
    {
      key: createKey(president.nm),
      content: (
        <NameWrapper>
          <AvatarWrapper>
            <Avatar
              name={president.nm}
              size="medium"
              src={`https://api.adorable.io/avatars/24/${encodeURIComponent(
                president.nm,
              )}.png`}
            />
          </AvatarWrapper>
          <a href="https://atlassian.design">{president.nm}</a>
        </NameWrapper>
      ),
    },
    {
      key: createKey(president.pp),
      content: president.pp,
    },
    {
      key: president.id,
      content: president.tm,
    },
    {
      content: iterateThroughLorem(index),
    },
    {
      content: (
        <DropdownMenu trigger="More" triggerType="button">
          <DropdownItemGroup>
            <DropdownItem>{president.nm}</DropdownItem>
          </DropdownItemGroup>
        </DropdownMenu>
      ),
    },
  ],
}));

const CustomTable = () => {
  return (
    <Wrapper>
      <DynamicTable
        head={head}
        rows={rows}
        rowsPerPage={10}
        defaultPage={1}
        loadingSpinnerSize="large"
        isLoading={false}
        isFixedSize
        defaultSortKey="term"
        defaultSortOrder="ASC"
        onSort={() => console.log('onSort')}
        onSetPage={() => console.log('onSetPage')}
      />
    </Wrapper>
  );
};

export default CustomTable;
