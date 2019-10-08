import './HmDateTimePicker.scss';
import React, { useState } from 'react';
import CalendarIcon from '@atlaskit/icon/glyph/calendar';
import { Popup } from 'semantic-ui-react'
import { DateTimePicker } from '@atlaskit/datetime-picker';
import Moment from 'moment';


const HmDateTimePicker = () => {

  const [date, setDate] = useState(Moment.utc(new Date()).local().format('DD/MM/YYYY HH:mm'));

  return (
    <div className="hm-date-time-picker-container">
      <Popup
        trigger={
          <div className="calendar-container" style={{ display: 'flex' }}>
            <span id="create-date-filter" className="container-drop" tabIndex="0" style={{ marginRight: '4px' }}>
              <CalendarIcon/>
            </span>
            <label htmlFor="create-date-filter">Ngày tạo</label>
          </div>
        }
        content={
          <div className="hm-date-time-picker" >
            <div>
              <div className="date-title">Từ ngày</div>
              <div className="hm-dropdown-item">
                <DateTimePicker onChange={(value) => setDate(value)} value={date}/>
              </div>
              <div className="date-title">Đến ngày</div>
              <div className="hm-dropdown-item">
                <DateTimePicker onChange={(value) => setDate(value)} value={date}/>
              </div>
            </div>
          </div>
        }
        on='click'
        position='bottom left'
      />
    </div>
  );
};

export default HmDateTimePicker;
