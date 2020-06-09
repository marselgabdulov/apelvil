// initial state
const initialState = {
  isMenuOpened: false,
}

// action creator
const TOOGLE_MENU = "TOOGLE_MENU"

export const toggleMenu = isMenuOpened => ({
  type: TOOGLE_MENU,
  isMenuOpened,
})

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_MENU:
      return { ...state, isMenuOpened: action.isMenuOpened }
    default:
      return state
  }
}
