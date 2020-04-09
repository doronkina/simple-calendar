import React from 'react';

import FilterUsersPanel from './FilterUsersPanel/FilterUsersPanel';
import FilteredUsers from './FilteredUsers/FilteredUsers';

const Users = () => {
    return (
        <main>
            <FilterUsersPanel />
            <FilteredUsers />
        </main>
    )
}

export default Users;