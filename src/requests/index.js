import axios from 'axios';
import {useCredentialsStore} from '@/store/credentialsStore';

const credentialsStore = useCredentialsStore();


const axiosClient = axios.create({
  baseURL: 'http://localhost:8000',
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
    return axiosClient.get('/users/me', {
      headers: credentialsStore.getApiRequestHeader(),
    });
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
    return axiosClient.get('/clients/me', {
      headers: credentialsStore.getApiRequestHeader(),
    });
  },
  getClientByEmail(emailAddress) {
    return axiosClient.get('/clients', {
      headers: credentialsStore.getApiRequestHeader(),
      params: {
        email_address: emailAddress,
      },
    });
  },
  postNewClient(clientData) {
    return axiosClient.post('/client', clientData, {
      headers: credentialsStore.getApiRequestHeader(),
    });
  },
  getEmailAddressSuggestions(emailAddress) {
    return axiosClient.get('/clients/email-address-suggestions', {
      headers: credentialsStore.getApiRequestHeader(),
      params: {
        email_address: emailAddress,
      },
    });
  },
  getClientIdEmailAddress(emailAddress) {
    return axiosClient.get('/client/id-by-email', {
      headers: credentialsStore.getApiRequestHeader(),
      params: {
        email_address: emailAddress,
      },
    });
  },
  getBikeMakeSuggestions(make) {
    return axiosClient.get('/bikes/suggest/makes', {
      headers: credentialsStore.getApiRequestHeader(),
      params: {
        make: make,
      },
    });
  },
  getBikeModelSuggestions(model) {
    return axiosClient.get('/bikes/suggest/models', {
      headers: credentialsStore.getApiRequestHeader(),
      params: {
        model: model,
      },
    });
  },
  getBikeSerialNumberSuggestions(serialNumber) {
    return axiosClient.get('/bikes/suggest/serial-numbers', {
      headers: credentialsStore.getApiRequestHeader(),
      params: {
        serial_number: serialNumber,
      },
    });
  },
  getBikeColourSuggestions(colour) {
    return axiosClient.get('/bikes/suggest/colours', {
      headers: credentialsStore.getApiRequestHeader(),
      params: {
        colour: colour,
      },
    });
  },
  getBike(make, model, colour, decals, serialNumber) {
    return axiosClient.get('/bike', {
      headers: credentialsStore.getApiRequestHeader(),
      params: {
        make: make,
        model: model,
        colour: colour,
        decals: decals,
        serial_number: serialNumber,
      },
    });
  },
  postNewBike(make, model, colour, decals, serialNumber) {
    return axiosClient.post('/bike', {
      make: make,
      model: model,
      colour: colour,
      decals: decals,
      serialNumber: serialNumber,
    }, {
      headers: credentialsStore.getApiRequestHeader(),
    });
  },
  getContractTypes() {
    return axiosClient.get('/contract/types', {
      headers: credentialsStore.getApiRequestHeader(),
    });
  },
  getBikeConditions() {
    return axiosClient.get('/bike/conditions', {
      headers: credentialsStore.getApiRequestHeader(),
    });
  },
  getDepositBearers() {
    return axiosClient.get('/users/deposit-bearers', {
      headers: credentialsStore.getApiRequestHeader(),
    });
  },
  getActiveUsers() {
    return axiosClient.get('/users/active-users', {
      headers: credentialsStore.getApiRequestHeader(),
    });
  },
  getRentalCheckers() {
    return axiosClient.get('/users/rental-checkers', {
      headers: credentialsStore.getApiRequestHeader(),
    });
  },
  checkUserPassword(username, password) {
    return axiosClient.post('/user/check/password', {
      'username': username,
      'password': password,
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  checkUserPasswordOrPin(username, password) {
    return axiosClient.post('/user/check/password-or-pin', {
      'username': username,
      'password': password,
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  postNewContract(clientId, bikeId, depositAmountCollected, conditionOfBike, contractType, notes, workingUser,
      workingPasswordOrPin, checkingUser, checkingPasswordOrPin, depositCollectingUser, depositCollectingPassword) {
    return axiosClient.post('/contract', {
      contract_data: {
        clientId: clientId,
        bikeId: bikeId,
        depositAmountCollected: depositAmountCollected,
        conditionOfBike: conditionOfBike,
        contractType: contractType,
        notes: notes,
      },
      working_username: workingUser,
      working_user_password_or_pin: workingPasswordOrPin,
      checking_username: checkingUser,
      checking_user_password_or_pin: checkingPasswordOrPin,
      deposit_receiving_username: depositCollectingUser,
      deposit_receiving_user_password: depositCollectingPassword,
    }, {
      headers: credentialsStore.getApiRequestHeader(),
    });
  },
  findClient(firstName, lastName, emailAddress) {
    return axiosClient.get('/client/find', {
      headers: credentialsStore.getApiRequestHeader(),
      params: {
        first_name: firstName,
        last_name: lastName,
        
      }
    })
  }
};
