import {usersAPI} from "../api/api";

const SET_USERS = 'SET_USERS';

const initialState = {
    usersList: null
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                usersList: action.usersList
            }
        default:
            return state;
    }
}

const setUsers= (usersList) => {
    return {
        type: SET_USERS,
        usersList
    }
}

export const getUsers = () => {
    return (dispatch) => {
        usersAPI.getUsers().then(users => {
            dispatch(setUsers(users.data))
        })
    }
}

export default usersReducer;