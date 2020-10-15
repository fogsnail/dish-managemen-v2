import * as Types from "../constants/index";

var data = JSON.parse(sessionStorage.getItem("oder"));
var initialState = data || {};

const showOrder = (state = initialState, action) => {
  switch (action.type) {
    case Types.ORDER: {
      state.mealCategory = action.order.mealCategory;
      state.numberOfPeople = action.order.numberOfPeople;
      state.restaurant = action.order.restaurant;
      state.items = action.order.items;
      sessionStorage.setItem("oder", JSON.stringify(state));
      return { ...state };
    }
    default:
      return state;
  }
};
export default showOrder;
