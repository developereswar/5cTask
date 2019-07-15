import { GETDATA, DETAILS_DATA } from "./actionType";
import Axios from "axios";
export const getData = () => {
  return dispatch => {
    Axios.get("https://api.github.com/users/mralexgray/repos").then(res => {
      dispatch({
        type: GETDATA,
        payload: res.data
      });
    });
  };
};

export const DetailData = (data) => {
  return dispatch => {
      dispatch({
        type: DETAILS_DATA,
        payload: data
      });
  };
};

