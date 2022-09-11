import { ActionTypes } from "../constants/action-types";

export const add_selectedProducts = (product) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.ADD_SELECTED_PRODUCT,
      payload: product,
    });
  };
 
};
