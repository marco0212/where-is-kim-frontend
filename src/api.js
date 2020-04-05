const WHERE_IS_KIM_BACK_URL = 'http://localhost:4000';
const GET_TOKEN = `${WHERE_IS_KIM_BACK_URL}/api/auth/login`;

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
