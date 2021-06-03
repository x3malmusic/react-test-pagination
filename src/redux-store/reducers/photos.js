import { SET_PHOTOS } from "../actions/types";

const initialState = {
  photos: null,
};

const photos =  (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTOS:
      return {
        ...state,
        photos: action.payload
      };
    default:
      return state;
  }
};

export default photos