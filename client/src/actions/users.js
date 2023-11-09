import * as api from "../api";
import { setCurrentUser } from "./currentUser";
export const fetchAllUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getAllUsers();
    dispatch({ type: "FETCH_USERS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updateProfile = (id, updateData) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(id, updateData);
    dispatch({ type: "UPDATE_CURRENT_USER", payload: data });
    const data1 = JSON.parse(localStorage.getItem("Profile"));
    data1.result.tag= data.tag;
    data1.result.about.pop();
    data1.result.about.push(data.about);
    dispatch(setCurrentUser(data1));
  } catch (error) {
    console.log(error);
  }
};