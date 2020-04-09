import React from 'react';
import {connect} from 'react-redux';

import FiltrationInterval from './FiltrationInterval';

const FiltrationIntervalContainer = props => {
    return <FiltrationInterval calendar={props.calendar} {...props} />
}

let mapStateToProps = state => {
    return {
        calendar: state.calendar
    }
};

export default connect(mapStateToProps)(FiltrationIntervalContainer);