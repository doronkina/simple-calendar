import React from 'react';

import trash from '../../../../imgs/trash.svg';
import edit from '../../../../imgs/edit.svg';

const FilteredUsers = props => {
    return (
        <tbody>
            {props.users.map(user => 
                <tr key={user.id}>
                    <td className="firstCol">
                        <div className="checkbox">
                            <input type="checkbox" />
                        </div>
                    </td>
                    <td>
                        <div className="userName">{user.name}</div>
                        <div className="email">{user.email}</div>
                    </td>
                    <td>{user.registrationDate}</td>
                    <td>{user.lastActivity}</td>
                    <td className="shotText">{user.lastAction}</td>
                    <td className="shotText">{user.product}</td>
                    <td>
                        <div className="userSettings">
                            <img src={edit} alt="edit" />
                            <img src={trash} alt="trash" />
                        </div>
                    </td>
                </tr>
            )}
        </tbody>
    )
}

export default FilteredUsers;