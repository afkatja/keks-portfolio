import { LANGUAGE_SWITCH_CLICK, LIGHTBOX_CLOSE_CLICK, LIGHTBOX_OPEN, SLIDER_CHANGE_ACTIVE } from '../actions';

const initialState = {
  language: 'en',
  lightboxShown: false,
  lightbox: {},
  activeItem: 0,
};

export const lightboxReducer = (state, action) => {
  switch (action.type) {
    case LIGHTBOX_OPEN:
      return {
        ...state,
        contentType: action.payload.contentType,
        contentData: action.payload.contentData,
        data: action.payload.data,
        currentItem: action.payload.currentItem,
      };
    default: return state;
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LANGUAGE_SWITCH_CLICK:
      return {
        ...state,
        language: action.payload.language,
      };
    case LIGHTBOX_CLOSE_CLICK:
      return { ...state, lightboxShown: false };
    case LIGHTBOX_OPEN:
      console.log('open lightbox', action.payload);
      return {
        ...state,
        lightboxShown: true,
        lightbox: lightboxReducer(state.lightbox, action),
      };
    case SLIDER_CHANGE_ACTIVE:
      return {
        ...state,
        activeItem: action.payload.activeItem,
      };
    default:
      return state;
  }
};
