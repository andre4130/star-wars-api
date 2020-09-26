import config from 'config';
import { handleResponse } from '../Helpers/handle-response';
import { authHeader } from '../services/auth-header';

const userService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
};

export default userService;