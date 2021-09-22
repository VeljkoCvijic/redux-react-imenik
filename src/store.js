import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {contactReducer} from "./reducers/contactReducer";
import {
    SAVED_DATA
} from "./constant/types";

export const intialState = {
    contacts: [
      {
        id: 1,
        name: "Veljko Cvijic",        
        phone: "065/60-41-895",
      },
      {
        id: 2,
        name: "Jovan Jovanovic",        
        phone: "063/65-14-789",
      }
    ],
    contact: null,
    selectedContacts: [],
  };

export const loadState = () => {
    try {
        const serialState = localStorage.getItem(SAVED_DATA);
      if (serialState === null) {
        localStorage.setItem(SAVED_DATA, JSON.stringify(intialState))
        return intialState;
      }
      return JSON.parse(serialState);
    } catch (err) {
        localStorage.setItem(SAVED_DATA, JSON.stringify(intialState))
      return intialState;
    }
};

const store = createStore(contactReducer, loadState());

export default store;