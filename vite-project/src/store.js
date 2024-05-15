import Vuex from 'vuex';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:8080';

const store = new Vuex.Store ({
    state() {
        return {
            count : 0,
            isLogedIn : false,
            token: null ,
        }},
    getters: {
        getCount: state => {
            return state.count;
        },
        getIsLogedIn: state => {
            return state.isLogedIn;
        }
    },
    mutations: {
        login (state) {
            state.isLogedIn = true;
        },
        logout (state) {
            state.isLogedIn = false ;
        },
        setToken(state, token) {
            state.token = token;
        }
    },
    actions: {

        loginUser({commit},{ accountIdentifier, password }){

            return new Promise((resolve, reject) => {
                axios.post('/api/auth/login', { // Make a POST request to your login endpoint
                  accountIdentifier,
                  password,
                })
                .then(
                  response => {
                  const token = response.data.token; // Extract token from response
                  commit('setToken', token); // Commit mutation to store token
                  commit('login'); // Commit mutation to indicate successful login
                  resolve(); // Resolve the promise to indicate successful login
                })
                .catch(error => {
                  console.error('Login Error:', error);
                  reject(error); // Reject the promise with the error
                });
              });
        },

        async logoutUser({ commit, getters }) {
            try {
              const token = getters.getToken;
              if (!token) {
                throw new Error('No token available for logout');
              }
      
              // Set the request headers with Authorization token
              const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Include the JWT token
              };
      
              // Make the POST request to the logout endpoint
              await axios.post('/api/auth/logout', {}, { headers });
      
              // Commit the logout mutation
              commit('logout');
      
              // Optionally clear any other data from the store
              // commit('clearUserData');
      
              // Return a success message or indication
              return 'Logout successful';
            } catch (error) {
              console.error('Logout error:', error);
              throw error; // Propagate the error to the caller
            }
          },
    }
})

export default store;