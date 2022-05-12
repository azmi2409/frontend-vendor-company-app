export const OPEN = "OPEN";
export const CLOSE = "CLOSE";

export const listState = {
  isOpen: false,
  data: {},
};

export const openAction = (data) => {
  return {
    type: OPEN,
    payload: data,
  };
};

export const closeAction = () => {
  return {
    type: CLOSE,
  };
};

export default function listStores(state = {}, action) {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        isOpen: true,
        data: action.payload,
      };
    case CLOSE:
      return {
        ...state,
        isOpen: false,
        data: {},
      };
    default:
      return state;
  }
}
