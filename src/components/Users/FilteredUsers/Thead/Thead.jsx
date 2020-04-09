import React from 'react';

import arrowDown from '../../../../imgs/arrowDown.svg';

const Thead = () => {
    return (
        <thead>
            <tr>
                <th className="firstCol">
                    <div className="checkbox">
                        <input type="checkbox" />
                    </div>
                </th>
                <th>Пользователь</th>
                <th>Дата регистрации</th>
                <th>Послядняя активность</th>
                <th>Последнее действие</th>
                <th>Продукт</th>
                <th>
                    <div className="tableSettings">
                        Отобразить
                        <span>15</span>
                        <img src={arrowDown} alt="arrowDown" />
                    </div>
                </th>
            </tr>
        </thead>
    )
}

export default Thead;