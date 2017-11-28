export const LANGUAGE_SWITCH_CLICK = 'LANGUAGE_SWITCH_CLICK';
export const languageSwitchClick = payload => ({ type: LANGUAGE_SWITCH_CLICK, payload });

export const LIGHTBOX_CLOSE_CLICK = 'LIGHTBOX_CLOSE_CLICK';
export const lightboxCloseClick = () => ({ type: LIGHTBOX_CLOSE_CLICK });

export const LIGHTBOX_OPEN = 'LIGHTBOX_OPEN';
export const lightboxOpenClick = payload => ({ type: LIGHTBOX_OPEN, payload });

export const SLIDER_CHANGE_ACTIVE = 'SLIDER_CHANGE_ACTIVE';
export const sliderChangeActive = payload => ({ type: SLIDER_CHANGE_ACTIVE, payload });
