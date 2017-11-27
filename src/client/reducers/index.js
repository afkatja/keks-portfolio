import { LANGUAGE_SWITCH_CLICK } from '../actions';

const initialState = {
  language: 'en',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LANGUAGE_SWITCH_CLICK:
      console.log('reducer', action.payload.language);
      return {
        ...state,
        language: action.payload.language,
      };
    default:
      return state;
  }
};
