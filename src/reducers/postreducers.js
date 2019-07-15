import { GETDATA, DETAILS_DATA } from "../actions/actionType";
const InitialState = {
  AllData: null,
  DetailData: []
}
export const getDataReducer = (state = null, action) => {

  switch (action.type) {
    case GETDATA:
      state = {
        ...state,
        AllData: action.payload
      };
      break;
    case DETAILS_DATA:
      state= {...state,
        DetailData:[action.payload]}
      break;
  }

  return state;
};
