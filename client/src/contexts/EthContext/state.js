const actions = {
  init: "INIT",
};

const initialState = {
  artifact2: null,
  contract2: null,
  artifact: null,
  web3: null,
  account: null,
  networkID: null,
  contract: null,
  songs: null,
  songjson: null,
  songdata: null,
};

const reducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case actions.init:
      return { ...state, ...data };
    default:
      throw new Error("Undefined reducer action type");
  }
};

export { actions, initialState, reducer };
