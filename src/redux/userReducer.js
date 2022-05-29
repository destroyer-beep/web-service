import {usersAPI} from "../api/api";

const SET_USER = 'SET_USER';
const SET_POSTS = 'SET_POSTS';

const initialState = {
    user: null,
    posts: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case SET_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        default: {
               return state
        }
    }
}

const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
}

const setPosts = (posts) => {
    return {
        type: SET_POSTS,
        posts
    }
}

export const getPosts = (userId) => {
    return (dispatch) => {
        usersAPI.getPosts(userId).then(posts => {
            dispatch(setPosts(posts.data))
        })
    }
}

export const getUser = (userId) => {
    return (dispatch) => {
        usersAPI.getUser(userId).then(user => {
            dispatch(setUser(user.data));
        })
    }
}

export default userReducer;