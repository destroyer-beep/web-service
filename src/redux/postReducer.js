import {usersAPI} from "../api/api";

const SET_POST = 'SET_POST';
const SET_COMMENT = 'SET_COMMENT';
const SET_COMMENTS = 'SET_COMMENTS';

const initialState = {
    post: null,
    comments: null
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POST:
            return {
                ...state,
                post: action.post
            }
        case SET_COMMENTS:
            return {
                ...state,
                comments: action.comments
            }
        default: {
            return state
        }
    }
}

const setPost = (post) => {
    return {
        type: SET_POST,
        post
    }
}

const setComments = (comments) => {
    return {
        type: SET_COMMENTS,
        comments
    }
}

export const getPost = (postId) => {
    return (dispatch) => {
        usersAPI.getPost(postId).then(post => {
            dispatch(setPost(post.data))
        })
    }
}

export const getComments = (postId) => {
    return (dispatch) => {
        usersAPI.getComments(postId).then(comments => {
            dispatch(setComments(comments.data))
        })
    }
}

export default postReducer;