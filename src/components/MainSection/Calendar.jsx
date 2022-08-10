import * as React from 'react';
// Taken from https://codepen.io/heika/pen/eyzOPx
import './calendar.scss';
import {
  day,
  month,
  year,
  monthName,
  dayOfTheYear,
  dayName,
  shortDayName,
} from '../../helpers/CustomDate';

const monthNamesMap = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

export default class MonthlyCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.curMonth = new Date(this.props.year, this.props.month - 1, 1);
  }
  changeMonth(e, changeVal) {
    this.setState(() => {
      return {
        curMonth: new Date(this.curMonth.setMonth(this.curMonth.getMonth() + changeVal)),
      };
    });
  }
  render() {
    return (
      <div className='monthlyCalendar'>
        <MonthlyCalendarHeader curMonth={this.curMonth} changeMonth={this.changeMonth.bind(this)} />
        <MonthlyCalendarContent curMonth={this.curMonth} startWithMon='0' />
      </div>
    );
  }
}

class MonthlyCalendarHeader extends React.Component {
  constructor(props) {
    super(props);
    this.curMonth = this.props.curMonth;
    this.state = { curMonth: this.props.Month };
  }
  render() {
    return (
      <div className='monthlyCalendarHeader'>
        <div className='monthlyCalendarYear'>{/* {this.props.curMonth.getFullYear()} */}</div>
        <div className='monthlyCalendarMonth'>
          <span onClick={() => this.props.changeMonth(this, -1)} className='btnChangeMonth'>
            {'\u003C'}
          </span>
          <span className='monthName'>{monthNamesMap[this.props.curMonth.getMonth() + 1]}</span>
          <span onClick={() => this.props.changeMonth(this, 1)} className='btnChangeMonth'>
            {'>'}
          </span>
        </div>
      </div>
    );
  }
}

class MonthlyCalendarContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let calendarClassName = '';
    const content = [];
    const yyyyMM = `${this.props.curMonth.getFullYear()}${this.props.curMonth.getMonth()}`;
    const firstDayStartAt = this.props.curMonth.getDay() - this.props.startWithMon;
    const lastDayOfMonth = new Date(
      this.props.curMonth.getFullYear(),
      this.props.curMonth.getMonth() + 1,
      0,
    );
    const lastDayLeft = 7 - (lastDayOfMonth.getDay() + 1);
    for (let i = 0; i < firstDayStartAt; i++) {
      content.push(<div key={`empty1_${yyyyMM}${i}`} className='dayCell'></div>);
    }
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      content.push(
        <div
          key={`date_${yyyyMM}${i}`}
          className={
            day === i &&
            this.props.curMonth.getMonth() + 1 === month &&
            year === this.props.curMonth.getFullYear()
              ? 'dayCell today'
              : 'dayCell'
          }
        >
          {i}
        </div>,
      );
    }
    if (this.props.startWithMon == '1') {
      calendarClassName = 'startWithMon';
    } else {
      calendarClassName = 'startWithSun';
    }
    return (
      <div>
        <MonthlyCalendarContentHeader startWithMon={this.props.startWithMon} />
        <div className={calendarClassName}>{content}</div>
      </div>
    );
  }
}
class MonthlyCalendarContentHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.startWithMon == '1') {
      return (
        <div className='startWithMon'>
          <div className='dayCell'>M</div>
          <div className='dayCell'>T</div>
          <div className='dayCell'>W</div>
          <div className='dayCell'>T</div>
          <div className='dayCell'>F</div>
          <div className='dayCell'>S</div>
          <div className='dayCell'>S</div>{' '}
        </div>
      );
    } else {
      return (
        <div className='startWithSun'>
          <div className='dayCell'>S</div>
          <div className='dayCell'>M</div>
          <div className='dayCell'>T</div>
          <div className='dayCell'>W</div>
          <div className='dayCell'>T</div>
          <div className='dayCell'>F</div>
          <div className='dayCell'>S</div>
        </div>
      );
    }
  }
}
