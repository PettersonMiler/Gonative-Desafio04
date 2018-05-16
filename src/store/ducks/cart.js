import Immutable from 'seamless-immutable';

export const Types = {
  CONFIRM: 'cart/CONFIRM',
  REMOVE: 'cart/REMOVE',
  QUANTITY: 'cart/QUANTITY',
};

const initialState = Immutable({
  data: [],
  total: 0,
});

export default function Cart(state = initialState, action) {
  switch (action.type) {
    case Types.CONFIRM: {
      let itemsCar = state.data.map((item) => {
        if (item.id === action.payload.data.id) {
          item.qtt += 1; /* Como eu poderia corrigir esse erro? Procurei mas n consegui corrigir" */
          return item;
        }
        return item;
      });

      console.tron.log(itemsCar);

      const items = state.data.filter(item => item.id === action.payload.data.id);
      if (items.length === 0) {
        itemsCar = [
          ...itemsCar, {
            id: action.payload.data.id,
            name: action.payload.data.name,
            brand: action.payload.data.brand,
            image: action.payload.data.image,
            price: action.payload.data.price,
            qtt: 1,
          }];
      }
      return {
        data: itemsCar,
        total: itemsCar.reduce((total, item) => total + (item.price * item.qtt), 0),
      };
    }
    case Types.REMOVE: {
      const items = state.data.filter(item => item.id !== action.payload.id);
      return {
        data: items,
        total: items.reduce((total, item) => total + (item.price * item.qtt), 0),
      };
    }
    case Types.QUANTITY: {
      const itemsCar = state.data.map((item) => {
        if (item.id === action.payload.id) {
          item.qtt = action.payload.qtt; /* Como eu poderia corrigir esse erro? Procurei mas n consegui corrigir" */
          return item;
        }
        return item;
      });

      return {
        data: itemsCar,
        total: itemsCar.reduce((total, item) => total + (item.price * item.qtt), 0),
      };
    }
    default:
      return state;
  }
}

export const Creators = {
  carConfirm: data => ({
    type: Types.CONFIRM,
    payload: { data },
  }),

  carRemove: id => ({
    type: Types.REMOVE,
    payload: { id },
  }),

  carQuantity: (id, qtt) => ({
    type: Types.QUANTITY,
    payload: {
      id,
      qtt,
    },
  }),
};

