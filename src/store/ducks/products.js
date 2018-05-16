import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'products/GET_REQUEST',
  GET_SUCCESS: 'products/GET_SUCCESS',
};

const initialState = Immutable({
  data: [],
  loading: false,
  categoryId: null,
});

export default function Produ(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true, categoryId: action.payload.category };
    case Types.GET_SUCCESS:
      return { ...state, data: action.payload.data, loadign: false };
    default:
      return state;
  }
}

export const Creators = {
  getProduRequest: category => ({
    type: Types.GET_REQUEST,
    payload: { category },
  }),

  getProduSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),

};

