import Vuex from "vuex";
import addPassenger from "./addPassenger";
const createStore = () => {
  return new Vuex.Store({
    modules: {
      addPassenger
    }
  });
};

export default createStore;
