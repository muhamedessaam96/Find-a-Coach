export default {
  addRequest(statet, payload) {
    statet.requests.push(payload);
  },
  setRequest(state, payload) {
    state.requests = payload;
  }
};
