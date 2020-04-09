import React from 'react';
import {connect} from 'react-redux';

import Tbody from './Tbody';

const TbodyContainer = props => {
    return <Tbody users={props.users} />
}

let mapStateToProps = state => {
    return {
        users: state.users.users
    }
};

export default connect(mapStateToProps)(TbodyContainer);