import axios from 'axios';

// The URL of your server's login endpoint
const LOGIN_URL = 'http://localhost:5000/login';

/**
 * Handles the user login process.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 */
const loginUser = async (email, password) => {
  try {
    // Send POST request with user credentials
    const response = await axios.post(LOGIN_URL, {
      email,
      password,
    });

    // Assume the server responds with a token in the 'data' object
    const token = response.data.token;
    
    if (token) {
      // store the JWT securely
      localStorage.setItem('jwtToken', token);
      
      // setUser to localStorage
      localStorage.setItem('user', JSON.stringify(response.data.user));

      console.log('Login successful! Token stored.');
      return { success: true, token };

    } else {
      throw new Error("Login failed: No token received from server.");
    }

  } catch (error) {
    // 3. Handle errors (network issues, incorrect credentials, etc.)
    console.error('Login failed:', error.response ? error.response.data : error.message);
    return { 
      success: false, 
      message: error.response?.data?.message || 'An unexpected error occurred.'
    };
  }
};

export default loginUser;