const showPopup = (bool) => {
    return {
        type: 'SHOW_POPUP',
        payload: bool
    }
}

const addChosenData = (data) => {
    return {
        type: 'ADD_CHOSEN_DATA',
        payload: data
    }
}

const setActivePage = (pageNum) => {
    return {
        type: 'SET_ACTIVE_PAGE',
        payload: pageNum
    }
}

export {
    showPopup,
    addChosenData,
    setActivePage
}