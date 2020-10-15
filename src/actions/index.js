import * as Types from "../constants/index";
export const actShowOrder = (order) => {
  return {
    type: Types.ORDER,
    order,
  };
};
