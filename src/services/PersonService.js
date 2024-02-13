import axios from "axios";
const REST_API_BASE_URL = 'http://localhost:8080/api/persons';
export const listPersons = () => {
    return axios.get(REST_API_BASE_URL);
}