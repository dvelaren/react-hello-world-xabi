export const UPDATE_USER_NAME = "UPDATE_USER_NAME";
export const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";

export const updateUserName = (name) => ({
  type: UPDATE_USER_NAME,
  name,
});

export const updateUserStatus = (status) => ({
  type: UPDATE_USER_STATUS,
  status,
});
