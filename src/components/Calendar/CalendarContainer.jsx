import React from 'react';
import {connect} from 'react-redux';

import Calendar from './Calendar';

import {editFirstMarkedDate, editSecondMarkedDate} from '../../store/reducers/calendarReducer';

const CalendarContainer = props => {
    return <Calendar calendar={props.calendar} {...props} />
}

let mapStateToProps = state => {
    return {
        calendar: state.calendar
    }
};

export default connect(mapStateToProps, {editFirstMarkedDate, editSecondMarkedDate})(CalendarContainer);