const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export const loginAction = (company) => {
  return {
    type: LOGIN,
    payload: company,
  };
};

export const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};

export const initialState = {
  username: "",
  type: "",
  token: "",
  isLoggedIn: false,
};

export const companyStores = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem(
        "token",
        JSON.stringify({
          token: action.payload.token,
          username: action.payload.username,
          type: action.payload.type,
        })
      );
      return {
        ...state,
        username: action.payload.username,
        type: action.payload.type,
        token: action.payload.token,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        username: "",
        type: "",
        token: "",
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
