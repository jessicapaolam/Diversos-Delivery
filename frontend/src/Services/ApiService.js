import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/users';

class ApiService {

    fetchAllData() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchDataById(id) {
        return axios.get(USER_API_BASE_URL + '/' + id);
    }

    details(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }

}

export default new ApiService();