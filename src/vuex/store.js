import Vuex from 'vuex'
import Axios from 'axios'

let store = new Vuex.Store({
  state: {
    expenses: []
  },
  mutations: {
    SET_EXPENSES_TO_STATE: (state, expenses) => {
      state.expenses = expenses;
    },
    REMOVE_FROM_EXPENSES: (state, index) => {
      state.expenses.splice(index, 1)
    }
  },
  actions: {
    GET_EXPENSES_FROM_API({ commit }) {
      return Axios('http://localhost:3000/expenses', {
        method: "GET"
      })
        .then((expenses) => {
          commit('SET_EXPENSES_TO_STATE', expenses.data);
          return expenses;
        })
        .catch((error) => {
          console.log(error);
          return error;
        })
    }
  },
  getters: {
    EXPENSES(state) {
      return state.expenses;
    }
  }
});

export default store;  