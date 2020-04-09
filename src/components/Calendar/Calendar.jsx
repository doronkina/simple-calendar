import React, {useState} from 'react';
import moment from 'moment';

import './Calendar.scss';

import arrowLeft from '../../imgs/arrowLeft.svg';
import arrowRight from '../../imgs/arrowRight.svg';

const Calendar = props => {
    // set a month and a year
    const currentMonth = moment().format('MM');
    let [month, changeMonth] = useState(currentMonth);

    const currentYear = moment().format('YYYY');
    let [year, changeYear] = useState(currentYear);

    // set selected days (default - today)
    let {firstMarkedDate, secondMarkedDate} = props.calendar;
    let {editFirstMarkedDate, editSecondMarkedDate} = props;
    const markDate = e => {
        const data = e.target.id;
        
        if (firstMarkedDate === data) {
            if (secondMarkedDate) {
                editFirstMarkedDate(secondMarkedDate);
                editSecondMarkedDate(null);
            } else {
                editFirstMarkedDate(null);
            }
        } else if (secondMarkedDate === data) {
            editSecondMarkedDate(null);
        } else if (!firstMarkedDate) {
            editFirstMarkedDate(data);
        } else if (!secondMarkedDate) {
            if (data > firstMarkedDate) {
                editSecondMarkedDate(data);
            } else {
                editSecondMarkedDate(firstMarkedDate);
                editFirstMarkedDate(data);
            }
        } else if (firstMarkedDate && secondMarkedDate) {
            if (data < secondMarkedDate) {
                editFirstMarkedDate(data);
            } else {
                editSecondMarkedDate(data);
            }
        } 
    }

    // create the set month
    const daysInMonth = month => moment(`${year}-${month}`, 'YYYY-MM').daysInMonth();
    const firstDayOfMonth = moment(`${year}-${month}`, 'YYYY-MM').startOf('month').format('d');

    const previousMonthDays = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
        let lastDay = (month === '01') ? 12 : daysInMonth(month - 1);
        
        previousMonthDays.push(
            <td key={i + 40}>
                <span className="noCurrentMonthDate">
                    {lastDay - firstDayOfMonth + 1 + i}
                </span>
            </td>
        );
    }

    const currentMonthDays = [];
    for (let i = 1; i <= daysInMonth(month); i++) {
        const id = moment(`${year}-${month}-${i}`, 'YYYY-MM-DD').format('L');

        let spanClasses = 'currentMonthDay';
        if (firstMarkedDate === id || secondMarkedDate === id) {
            spanClasses += ' markedDate';
        } 
        
        let tdClasses = secondMarkedDate ? 
            ( firstMarkedDate === id ? 'firstMarkedDate' : 
            (secondMarkedDate === id ? 'secondMarkedDate' : null) ) : null
        if (secondMarkedDate && id > firstMarkedDate && id < secondMarkedDate) {
            tdClasses = 'includesDate';
        }

        currentMonthDays.push(
            <td key={i} className={tdClasses}>
                <span className={spanClasses} id={id} onClick={ e => markDate(e) }>
                    {i}
                </span>
            </td>
        )
    }

    const renderMonth = [...previousMonthDays, ...currentMonthDays];
    let day = 1;
    while (renderMonth.length % 7 !== 0) {
        renderMonth.push(
            <td key={day + 50}>
                <span className="noCurrentMonthDate">
                    {day}
                </span>
            </td>
        );
        day++
    }

    // the set month
    const rows = [];
    let cells = [];
    renderMonth.forEach( (row, i) => {
        if (i % 7 !== 0) {
            cells.push(row);
        } else {
            const insertRow = cells.slice();
            rows.push(insertRow);
            cells = [];
            cells.push(row);
        }
        if (i === renderMonth.length - 1) {
            const insertRow = cells.slice();
            rows.push(insertRow);
        }
    } )

    // .calendarNav
    const previousMonth = () => {
        if (month === '01') changeYear(`${year - 1}`);

        const newMonth = (month === '01') ? '12' : moment(`${month - 1}`, 'MM').format('MM');
        changeMonth(newMonth);
    }
    const nextMonth = () => {
        if (month === '12') changeYear(`${+year + 1}`);

        const newMonth = (month === '12') ? '01' : moment(`${+month + 1}`).format('MM');
        changeMonth(newMonth);
    }

    // .calendarBtns
    const markToday = () => {
        editFirstMarkedDate( moment().format('L') );
        if (secondMarkedDate) editSecondMarkedDate(null);
    }
    const markYesterday = () => {
        const year = moment().format('Y');
        const month = moment().format('MM');
        const day = moment().format('DD') - 1;
        
        editFirstMarkedDate( moment(`${year}-${month}-${day}`, 'YYYY-MM-DD' ).format('L') );
        if (secondMarkedDate) editSecondMarkedDate(null);
    }
    const markDaysNumber = daysNumber => {
        let year, month;
        let day = moment().format('DD') - daysNumber + 1;

        if (day > 0) {
            year = moment().format('Y');
            month = moment().format('MM');
        } else {
            month = moment().format('MM') - 1;

            if (month) {
                year = moment().format('Y');
            } else {
                year = moment().format('Y') - 1;
                month = '12';
            }
            day += daysInMonth(month);
        }
        
        editFirstMarkedDate( moment(`${year}-${month}-${day}`, 'YYYY-MM-DD').format('L') );
        editSecondMarkedDate( moment().format('L') );
    }
    const markMonth = monthNumber => {
        let year = monthNumber ? moment().format('Y') : moment().format('Y') - 1;
        let month = monthNumber ? monthNumber : '12';
        const lastDay = daysInMonth(month);
        
        editFirstMarkedDate( moment(`${year}-${month}-01`, 'YYYY-MM-DD').format('L') );
        editSecondMarkedDate( moment(`${year}-${month}-${lastDay}`, 'YYYY-MM-DD').format('L') );
    }

    // .activeUpdateBtn
    const setDateInterval = () => {
        if (firstMarkedDate) {
            props.showCalendar(false);
            props.showDateInterval(true);
        }
    }

    return (
        <div className="calendarBg">
            <div className="calendarWrapper">
                <div className="calendarBtns">
                    <button>Весь срок</button>
                    <button onClick={ () => markToday() }>Сегодня</button>
                    <button onClick={ () => markYesterday() }>Вчера</button>
                    <button onClick={ () => markDaysNumber(7) }>Последние 7 дней</button>
                    <button onClick={ () => markDaysNumber(30) }>Последние 30 дней</button>
                    <button onClick={ () => markMonth( moment().format('MM') ) }>В этом месяце</button>
                    <button onClick={ () => markMonth( moment().format('MM') - 1 ) }>Прошлы месяц</button>
                </div>
                <div className="calendar">
                    <div className="calendarNav">
                        <img src={arrowLeft} alt="arrowLeft" onClick={ () => previousMonth() } />
                        { moment(`${month}`, 'MM').format('MMMM') }, {year}
                        <img src={arrowRight} alt="arrowRight" onClick={ () => nextMonth() } />
                    </div>
                    <table>
                        <thead>
                            <tr>
                                { moment.weekdaysShort().map(day => <th key={day}>{day}</th>) }
                            </tr>
                        </thead>
                        <tbody>
                            { rows.map( (d, i) => i !== 0 ? <tr key={i * 100}>{d}</tr> : null ) }
                        </tbody>
                    </table>
                    <div className="submitForm">
                        <button className="cancel" onClick={ () => props.showCalendar(false) }>
                            Отмена
                        </button>
                        <button className={ firstMarkedDate ? 'activeUpdateBtn' : 'update' } onClick={ () => setDateInterval() }>
                            Обновить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calendar;