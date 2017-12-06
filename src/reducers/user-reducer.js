const initialState = {
  // normalized format:
  // meals: {
  //   byId: {
  //     "2017-12-03": {
  //       date: "2017-12-03",
  //       breakfast: "oatmeal",
  //       lunch: "grilled chicken salad",
  //       dinner: "burger and sweet potato fries"
  //     }
  //   }
  //   allIds: ["2017-12-03", ]
  // }

  currentUser: {
    name: "amanda"
  }
};

export const userReducer = (state=initialState) => {
  return state;
};
