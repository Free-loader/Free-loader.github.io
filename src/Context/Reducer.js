const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CONTACT_SLIDE':
      return {
        ...state,
        contactSlide: action.contactSlide
      };
    default:
      return state;
  }
};

export default reducer;
