export const setActive = id => {
  return {
    type: 'SET_ACTIVE_ITEM',
    payload: id,
  };
};

export const onPasswordChange = password => {
  return {
    type: 'ON_PASSWORD_CHANGE',
    payload: password,
  };
};

export const onPasswordSubmit = isAuthorized => {
  return {
    type: 'ON_PASSWORD_SUBMIT',
    payload: isAuthorized,
  };
};
