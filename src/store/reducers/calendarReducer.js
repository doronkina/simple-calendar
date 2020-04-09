import moment from 'moment';

const EDIT_FIRST_MARKED_DATE = 'EDIT-FIRST-MARKED-DATE';
const EDIT_SECOND_MARKED_DATE = 'EDIT-SECOND-MARKED-DATE';

let initialState = {
    firstMarkedDate: moment().format('L'),
    secondMarkedDate: null
};

const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_FIRST_MARKED_DATE:
            return {
                ...state,
                firstMarkedDate: action.firstMarkedDate
            }
        case EDIT_SECOND_MARKED_DATE:
            return {
                ...state,
                secondMarkedDate: action.secondMarkedDate
            }
        default:
            return state
    }
}

export const editFirstMarkedDate = firstMarkedDate => ( {type: EDIT_FIRST_MARKED_DATE, firstMarkedDate} );
export const editSecondMarkedDate = secondMarkedDate => ( {type: EDIT_SECOND_MARKED_DATE, secondMarkedDate} );

export default calendarReducer;