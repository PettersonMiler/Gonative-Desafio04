import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'categories/GET_REQUEST',
  GET_SUCCESS: 'categories/GET_SUCCESS',
  GET_FAILURE: 'categories/GET_FAILURE',
};

const initialState = Immutable({
  data: [],
  loading: false,
});

export default function Categ(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { data: action.payload.data, loadign: false };
    default:
      return state;
  }
}

export const Creators = {
  getCategRequest: () => ({
    type: Types.GET_REQUEST,
  }),

  getCategSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};

