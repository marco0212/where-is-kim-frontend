const WHERE_IS_KIM_BACK_URL = "http://localhost:4000";
const GET_TOKEN = `${WHERE_IS_KIM_BACK_URL}/api/auth/login`;
const SIGNUP = `${WHERE_IS_KIM_BACK_URL}/api/auth/signup`;
const REGISTER_TEAM = `${WHERE_IS_KIM_BACK_URL}/api/team/new`;
const VERIFY_USER = `${WHERE_IS_KIM_BACK_URL}/api/team/verify`;
const getTeamJoinUrl = (name) =>
  `${WHERE_IS_KIM_BACK_URL}/api/team/${name}/join`;
const getWorkOnUrl = (id) => `${WHERE_IS_KIM_BACK_URL}/api/team/${id}/onWork`;
const getWorkOffUrl = (id) => `${WHERE_IS_KIM_BACK_URL}/api/team/${id}/offWork`;
const getToggleLikeThreadUrl = (id) =>
  `${WHERE_IS_KIM_BACK_URL}/api/thread/${id}/like`;
const getCommentThreadUrl = (id) =>
  `${WHERE_IS_KIM_BACK_URL}/api/thread/${id}/comment`;
const JWT_TEST = `${WHERE_IS_KIM_BACK_URL}/`;

export const getTokenAPI = (email, password) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ email, password }),
  };

  return fetch(GET_TOKEN, options);
};

export const signupAPI = (username, email, password) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  };

  return fetch(SIGNUP, options);
};

export const registerTeamAPI = (
  teamName,
  createdBy,
  location,
  workOnTime,
  workOffTime
) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      teamName,
      createdBy,
      location,
      workOnTime,
      workOffTime,
    }),
  };

  return fetch(REGISTER_TEAM, options);
};

export const verifyAPI = (token) => {
  const options = { method: "POST" };
  return fetch(`${VERIFY_USER}?token=${token}`, options);
};

export const joinTeamAPI = (teamName, userId) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      userId,
    }),
  };

  return fetch(getTeamJoinUrl(teamName), options);
};

export const workOnAPI = (teamId, userId) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      userId,
    }),
  };

  return fetch(getWorkOnUrl(teamId), options);
};

export const workOffAPI = (teamId, userId) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      userId,
    }),
  };

  return fetch(getWorkOffUrl(teamId), options);
};

export const toggleLikeAPI = (threadId, userId) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      userId,
    }),
  };

  return fetch(getToggleLikeThreadUrl(threadId), options);
};

export const testAPI = (token) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
  };

  return fetch(JWT_TEST, options);
};
