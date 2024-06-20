import Vuex from 'vuex';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:8080';

const store = new Vuex.Store ({
    state() {
        return {
            count : 0,
            isLogedIn : false,
            token: null ,
             profile: {
              accountId : null,
              accountIdentifier : null,
              role: null,
              justSignedUp: false,
            },
            user: {
              nom: null,
              prenom: null,
              email: null,
              telephone: null,
              pays: null,
              ville: null,
              adresse: null,
              type: null,
              _id: null,
            }
        }},
    getters: {
        getCount: state => {
            return state.count;
        },
        getIsLogedIn: state => {
            return state.isLogedIn;
        },
        getToken: state => state.token,
        getUser: state => {
          return state.profile.accountId
        },
  
      
    },
    mutations: {
      initialiseStore(state) {
        // Check if the ID exists
        if(localStorage.getItem('store')) {
          // Replace the state object with the stored item
          this.replaceState(
            Object.assign(state, JSON.parse(localStorage.getItem('store')))
          );
        }
      },
        login (state) {
            state.isLogedIn = true;
        },
        logout (state) {
            state.isLogedIn = false ;
        },
        setToken(state, token) {
            state.token = token;
        },
        setProfile(state, profile){
          state.profile = profile;
        },
        setJustSignedUp(state, status) {
          state.justSignedUp = status;
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
                  const {token, profile} = response.data; // Extract token from response
                  console.log("profile : ", profile);
                  commit('setToken', token);
                  commit('setProfile', profile) // Commit mutation to store token
                  commit('login'); // Commit mutation to indicate successful login
                  localStorage.setItem('store', JSON.stringify(store.state));
                  localStorage.setItem('user', JSON.stringify(profile));
                  localStorage.setItem('token', token);
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
            let authToken = getters.getToken; // Change from const to let
            const storagetoken = localStorage.getItem('token');
    
            console.log('storagetoken :', storagetoken);
            console.log('authToken :', authToken);
    
            // Use the storagetoken if authToken is not available
            if (!authToken) {
                authToken = storagetoken;
            }
    
            // Check if there's no token at all
            if (!authToken) {
                throw new Error('No token available for logout');
            }
    
            console.log('Final authToken :', authToken);
    
            // Set the request headers with Authorization token
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}` // Include the JWT token
            };
    
            // Make the POST request to the logout endpoint
            await axios.post('/api/auth/logout', {}, { headers });
    
            // Commit the logout mutation
            commit('logout');
    
            // Clear local storage
            localStorage.removeItem('store');
            localStorage.removeItem('token');
    
            // Return a success message or indication
            return 'Logout successful';
        } catch (error) {
            console.error('Logout error:', error);
            throw error; // Propagate the error to the caller
        }
          },
    }
})

store.subscribe((mutation, state) => {
	// Store the state object as a JSON string
	localStorage.setItem('store', JSON.stringify(state));
});

export default store;