import axios from 'axios';
import {useCredentialsStore} from '@/store/credentialsStore';

const credentialsStore = useCredentialsStore();

const axiosClient = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {'Authorization': 'Bearer ' + credentialsStore.token},
});

export default {
  getOpeningTimes() {
    return axiosClient.get('/public/opening-hours');
  },
  getUserToken(username, password) {
    return axiosClient.post('/users/token', {
      'username': username,
      'password': password,
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  getUserMe() {
    return axiosClient.get('/users/me');
  },
  getClientLoginCode(emailAddress) {
    return axiosClient.get('/client/login-code', {
      params: {
        email_address: emailAddress,
      },
    });
  },
  getClientToken(clientId, code) {
    return axiosClient.post('/clients/token', {
      'username': clientId,
      'password': code,
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  getClientMe() {
    return axiosClient.get('/clients/me');
  },
};
