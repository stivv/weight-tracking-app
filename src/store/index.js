import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

import { createStore } from "vuex";

const store = createStore({
  state,
  mutations,
  actions,
  getters
});

export default store;