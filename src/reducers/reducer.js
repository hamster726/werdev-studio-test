
const initialState = {
    popupSavedDate: null,
    showPopup: false,
    datePull: [],
    shownDataInPopup: [0,1,0],
    activePage: 0

}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ('SHOW_POPUP') : {
            return{
                ...state,
                showPopup: action.payload
            }
        }
        case ('ADD_CHOSEN_DATA'): {

            const pull = state.datePull;
            pull.push(action.payload)

            return {
                ...state,
                datePull: pull,
                shownDataInPopup: [action.payload.getMonth(), action.payload.getDate(), action.payload.getDay()]
            }

        }
        case('SET_ACTIVE_PAGE'): {
            return {

                ...state,
                activePage: action.payload
            }
        }
        default:
            return state;


    }
}

export default reducer;
