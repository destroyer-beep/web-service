import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const usersAPI = {
    getUsers() {
        return instance.get(`users`);
    },
    getPosts(userId) {
        return instance.get(`users/${userId}/posts`);
    },
    getUser(userId) {
        return instance.get(`users/${userId}`);
    },
    getPost(postId) {
        return instance.get(`/posts/${postId}`);
    },
    getComments(postId) {
        return instance.get(`/posts/${postId}/comments`)
    }
}