const GRADING_APP_USER_INFO = "grading_app_user_info";

export const setUserInfo = userInfo => {
  window.localStorage.setItem(GRADING_APP_USER_INFO, JSON.stringify(userInfo));
};

export const getUserInfo = () => {
  return window.localStorage.getItem(GRADING_APP_USER_INFO)
    ? JSON.parse(window.localStorage.getItem(GRADING_APP_USER_INFO))
    : { isAdmin: false };
};

export const clearUserInfo = () => {
  window.localStorage.clear(GRADING_APP_USER_INFO);
  window.localStorage.setItem(
    GRADING_APP_USER_INFO,
    JSON.stringify({ isAdmin: false })
  );
};
