import {
    CREATE_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    SELECT_CONTACT,
    SAVED_DATA
  } from "../constant/types";
  
  export const contactReducer = (state, action) => {
    if (!state) {
      state=JSON.parse(localStorage.getItem(SAVED_DATA))
    }
    switch (action.type) {
      case CREATE_CONTACT:
        const created = [action.payload, ...state.contacts];
        localStorage.setItem(SAVED_DATA, JSON.stringify({
          ...state,
          contacts: created,
        }));
        return {
          ...state,
          contacts: created,
        };
      case GET_CONTACT:
        let arr = state.contacts.filter(
          (contact) => contact.id == action.payload
        );
        arr = arr.values();
        for (let val of arr) {
          arr = val;
        }
        return {
          ...state,
          contact: arr,
        };
      case UPDATE_CONTACT:
        const update = state.contacts.map((contact) =>
          contact.id == action.payload.id ? action.payload : contact
        );
        localStorage.setItem(SAVED_DATA, JSON.stringify({
          ...state,
          contacts: update,
        }));
        return {
          ...state,
          contacts: update,
        };
      case DELETE_CONTACT:
        const deleteContact = state.contacts.filter(
          (contact) => contact.id != action.payload
        );
        localStorage.setItem(SAVED_DATA, JSON.stringify({
          ...state,
          contacts: deleteContact,
        }));
        return {
          ...state,
          contacts: deleteContact,
        };
      case SELECT_CONTACT:
        return {
          ...state,
          selectedContacts: action.payload,
        };
      default:
        return state;
    }
  };