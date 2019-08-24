const APPLICATION_LOCAL_STORAGE_KEY = "journal_app";
export const setToken = ({ token }) => {
  window.localStorage.setItem(APPLICATION_LOCAL_STORAGE_KEY, token);
};

export const getToken = () => {
  return window.localStorage.getItem(APPLICATION_LOCAL_STORAGE_KEY);
};

export const clearToken = () => {
  window.localStorage.clear(APPLICATION_LOCAL_STORAGE_KEY);
};
