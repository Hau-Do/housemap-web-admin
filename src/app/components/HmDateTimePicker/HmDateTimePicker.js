import './HmDateTimePicker.scss';
import React, { useState } from 'react';
import CalendarIcon from '@atlaskit/icon/glyph/calendar';
import { Popup } from 'semantic-ui-react'
import { DateTimePicker } from '@atlaskit/datetime-picker';
import Moment from 'moment';
import Button from '@atlaskit/button';


const HmDateTimePicker = ({ title, onChangeDateTimeStart, onChangeDateTimeEnd, onFilterRange }) => {

  const [startDate, setStartDate] = useState(Moment.utc(new Date()).local().format('DD/MM/YYYY HH:mm'));
  const [endDate, setEndDate] = useState(Moment.utc(new Date()).local().format('DD/MM/YYYY HH:mm'));

  const updateStart = (value) => {
    setStartDate(value);
    onChangeDateTimeStart(value);
  }

  const updateEnd = (value) => {
    setEndDate(value);
    onChangeDateTimeEnd(value);
  }

  const filter = () => {
    let miliSecondStart = Moment(startDate).format("x");
    let miliSecondEnd = Moment(endDate).format("x");
    onFilterRange(miliSecondStart, miliSecondEnd);
  }

  const clear = () => {
    setStartDate(null);
    setEndDate(null);
    onFilterRange(null, null);
  }

  return (
    <div className="hm-date-time-picker-container">
      <Popup
        trigger={
          <div className="calendar-container" style={{ display: 'flex' }}>
            <span id="create-date-filter" className="container-drop" tabIndex="0" style={{ marginRight: '4px' }}>
              <CalendarIcon/>
            </span>
            <label htmlFor="create-date-filter">{title}</label>
          </div>
        }
        content={
          <div id="hm-date-time-picker">
            <div className="date-title start">Từ ngày</div>
            <div className="hm-dropdown-item">
              <DateTimePicker 
                timeFormat="HH:mm"
                dateFormat="DD/MM/YYYY" 
                onChange={(value) => updateStart(value)} 
                value={startDate}/>
            </div>
            <div className="date-title end">Đến ngày</div>
            <div className="hm-dropdown-item">
              <DateTimePicker 
                timeFormat="HH:mm"
                dateFormat="DD/MM/YYYY"
                onChange={(value) => updateEnd(value)} 
                value={endDate}/>
            </div>
            <Button className="filter-datetime-btn" onClick={clear}>ClearX</Button>
            <Button className="filter-datetime-btn" onClick={filter}>Filter</Button>
          </div>
        }
        on='click'
        position='bottom left'
      />
    </div>
  );
};

export default HmDateTimePicker;
