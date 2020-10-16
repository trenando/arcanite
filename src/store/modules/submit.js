export default {
  state: {
    submitMessage: ""
  },
  mutations: {},
  actions: {},
  getters: {
    changeSubmitMessage: state => value => {
      state.submitMessage = value;
    }
  }
};
