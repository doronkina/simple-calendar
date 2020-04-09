let initialState = {
    users: [
        {
            id: 1, 
            name: 'User1', 
            email: 'user1@user.com', 
            registrationDate: 'Февраль 1, 2020', 
            lastActivity: 'Февраль 1, 2020',
            lastAction: 'view_landing_course1',
            product: 'Как наладить отнош',
        },
        {
            id: 2, 
            name: 'User2', 
            email: 'user2@user.com', 
            registrationDate: 'Февраль 1, 2020', 
            lastActivity: 'Февраль 1, 2020',
            lastAction: 'view_landing_course1',
            product: 'Как наладить отнош',
        },
        {
            id: 3, 
            name: 'User3', 
            email: 'user3@user.com', 
            registrationDate: 'Февраль 1, 2020', 
            lastActivity: 'Февраль 1, 2020',
            lastAction: 'view_landing_course1',
            product: 'Как наладить отнош',
        },
        {
            id: 4, 
            name: 'User4', 
            email: 'user4@user.com', 
            registrationDate: 'Февраль 1, 2020', 
            lastActivity: 'Февраль 1, 2020',
            lastAction: 'view_landing_course1',
            product: 'Как наладить отнош',
        }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default usersReducer;