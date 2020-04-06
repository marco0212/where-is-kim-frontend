const WHERE_IS_KIM_BACK_URL = 'http://localhost:4000';
const GET_TOKEN = `${WHERE_IS_KIM_BACK_URL}/api/auth/login`;
const SIGNUP = `${WHERE_IS_KIM_BACK_URL}/api/auth/signup`;

const JWT_TEST = `${WHERE_IS_KIM_BACK_URL}/`;

export const getTokenAPI = (email, password) => {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ email, password })
  };

  return fetch(GET_TOKEN, options);
}

export const signupAPI = (username, email, password, passwordConfirm, profile_pic ) => {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ username, email, password, passwordConfirm, profile_pic })
  };

  return fetch(SIGNUP, options);
};
export const testAPI = (token) => {
  const options = {
    headers: {
      "Authorization": `Bearer ${token}`
    },
    method: 'POST'
  };

  return fetch(JWT_TEST, options);
};