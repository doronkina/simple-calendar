import React from 'react';

import Thead from './Thead/Thead';
import TbodyContainer from './Tbody/TbodyContainer';

import './FilteredUsers.scss';

const FilteredUsers = () => {
    return (
        <form>
            <table>
                <Thead />
                <TbodyContainer />
            </table>
        </form>
    )
}

export default FilteredUsers;