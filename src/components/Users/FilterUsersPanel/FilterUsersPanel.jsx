import React, {useState} from 'react';

import CalendarContainer from '../../Calendar/CalendarContainer';
import FiltrationIntervalContainer from '../FiltrationInterval/FiltrationIntervalContainer';

import ArrowDownSvg from '../../../imgs/svg/arrowDown';
import CalendarSvg from '../../../imgs/svg/calendar';
import FilterSvg from '../../../imgs/svg/filter';

import './FilterUsersPanel.scss';

const FilterUsersPanel = () => {
    let [calendar, showCalendar] = useState(false);
    let [dateInterval, showDateInterval] = useState(false);

    return (
        <div className="filterUsersPanel">
            <div className="btns">
                <div className='filterBtns'>
                    <div onClick={ () => showCalendar(true) }>
                        <CalendarSvg />
                        <span>
                            За 1 день <ArrowDownSvg />
                        </span>
                    </div>
                    <div>
                        <FilterSvg />
                        <span>
                            Фильтр <ArrowDownSvg />
                        </span>
                    </div>
                </div>
                <div className="additionBtns">
                    {!dateInterval ? <button className="unloadBtn">Выгрузить</button> : null}
                    <button className="addContactsBtn">Добавить контакты</button>
                </div>
            </div>
            {calendar ? <CalendarContainer showCalendar={showCalendar} showDateInterval={showDateInterval} /> : 
                (dateInterval ? <FiltrationIntervalContainer showDateInterval={showDateInterval} /> : null)
            }
        </div>
    )
}

export default FilterUsersPanel;