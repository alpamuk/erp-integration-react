const INITIAL_STATE = {
  machines: [],
  message: "",
  selectedMachineId: "",
};

export const reducerMachines = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_COUNTRIES_SUCCESS":
      return { ...state, machines: action.payload };
    case "GET_COUNTRIES_ERROR":
      return { ...state, message: action.payload };
    case "SET_MACHINE_ID":
      // console.log(action.payload.name);
      //return { ...state, selectedMachineId: action.payload.id };
      return { ...state, selectedMachineId: action.payload.name };
    default:
      return state;
  }
};
