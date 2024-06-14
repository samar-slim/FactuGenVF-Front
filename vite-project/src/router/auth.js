


async function isTokenValid() {
    const token = localStorage.getItem('token');
    console.log('token :',token)
    
    if (!token ) {
      return false;
    }
    
    // Example of making an API call to verify the token
    try {
      const response = await fetch('http://localhost:8080/api/auth/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        return data.valid; // Assuming API returns { valid: true }
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error verifying token:', error);
      return false;
    }
  }
  
  // General auth guard
  export async function authGuard(to, from, next) {
    const isValid = await isTokenValid();
   
    console.log('isValid',isValid)

    if (isValid) {
      next();
    } else {
      next('/login');
    }
  }
  
  // User-specific auth guard
  export async function authGuardUser(to, from, next) {
    const isValid = await isTokenValid();
    const store = JSON.parse(localStorage.getItem('store')); // or your user fetching logic
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (isValid && store && store.profile.type === 'user' || isValid && user && user.type === 'user') {
      console.log('next page called for user')
      next();
    } else {
      next('/login');
    }
  }
  
  // Admin-specific auth guard
  export async function authGuardAdmin(to, from, next) {
    const isValid = await isTokenValid();
    const store = JSON.parse(localStorage.getItem('store')); // or your user fetching logic
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('isValid',isValid)
    
    if (isValid && store && store.profile.type === 'admin' || isValid && user && user.type === 'admin') {
      next();
    } else {
      next('/login');
    }
  }

  export async function checkAuth(to, from, next) {
    const isValid = await isTokenValid();
    const store = JSON.parse(localStorage.getItem('store'));
    const user = JSON.parse(localStorage.getItem('user'));

    if (isValid && store || isValid && user) {
        let role = '';
        if (store) {
          role = store.profile.role;
        } else if (user) {
          role = user.type;
        }
        console.log('role', role)
        next(`/${store.profile.type}/Dashboard`);
    } else {
        if (to.path !== '/login') {
            next('/login');
        } else {
            next();
        }
    }
}
