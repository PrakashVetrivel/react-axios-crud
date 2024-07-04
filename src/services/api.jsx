import axios from 'axios';

// Updated API base URL with the new mock API endpoint
const API_URL = 'https://66870e7983c983911b04706c.mockapi.io/react-axios-crud';

export const getUsers = () => axios.get(API_URL);
export const createUser = (user) => axios.post(API_URL, user);
export const updateUser = (id, user) => axios.put(`${API_URL}/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);
