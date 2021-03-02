import axios from "axios";

export const getMachines = () => (dispatch) => {
  axios
    // .get("http://192.172.174.61:8080/api/v1/Machines")
    .get("https://restcountries.eu/rest/v2/all")

    .then((response) =>
      dispatch({ type: "GET_COUNTRIES_SUCCESS", payload: response.data })
    )
    .catch((error) =>
      dispatch({ type: "GET_COUNTRIES_ERROR", payload: error })
    );
};

export const setMachineId = (machine) => {
  return { type: "SET_MACHINE_ID", payload: machine };
};
