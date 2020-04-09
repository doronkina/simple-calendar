import moment from 'moment';

import React from 'react';

import cancel from '../../../imgs/cancel.svg';

import './FiltrationInterval.scss';

const FiltrationInterval = props => {
    const {firstMarkedDate: firstDate, secondMarkedDate: secondDate} = props.calendar;
    
    const firstDay = firstDate.slice(3, 5);
    const firstMonth = moment(`${firstDate.slice(0, 2)}`, 'MM').format('MMM');
    const firstYear = firstDate.slice(6);

    let secondDay, secondMonth, secondYear;
    if (secondDate) {
        secondDay = secondDate.slice(3, 5);
        secondMonth = moment(`${secondDate.slice(0, 2)}`, 'MM').format('MMM');
        secondYear = firstDate.slice(6);
    }

    return (
        <div className="filtrationInterval">
            <div className="timeInterval">
                {`${firstDay} ${firstMonth} ${firstYear !== secondYear ? firstYear : ''}
                ${secondDate ? ` - ${secondDay} ${secondMonth} ${secondYear}` : ''}`}
                <button onClick={ () => props.showDateInterval(false) }>
                    <img src={cancel} alt="cancel" />
                </button>
            </div>
        </div>
    )
}

export default FiltrationInterval;