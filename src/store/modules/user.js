const initialState = {
  surname: "",
  name: "",
  lastname: "",
  date: "",
  phoneNumber: "",
  gender: "",
  clientGroup: [],
  doctor: "",
  disableSms: false,
  index: "",
  country: "",
  region: "",
  city: "",
  street: "",
  building: "",
  document: "",
  passIndex: "",
  passNumber: "",
  received: "",
  receivedDate: ""
};

export default {
  state: {
    user: {
      surname: "",
      name: "",
      lastname: "",
      date: "",
      phoneNumber: "",
      gender: "",
      clientGroup: [],
      doctor: "",
      disableSms: false,
      index: "",
      country: "",
      region: "",
      city: "",
      street: "",
      building: "",
      document: "",
      passIndex: "",
      passNumber: "",
      received: "",
      receivedDate: ""
    },
    users: []
  },
  mutations: {
    updateUser(state, user) {
      state.users.push(user);
      state.user = initialState;
    }
  },
  actions: {},
  getters: {}
};
