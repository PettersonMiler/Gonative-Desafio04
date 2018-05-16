import { call, put } from 'redux-saga/effects';
import api from 'services/api';

import { Creators as ProductsActions } from 'store/ducks/products';

export function* getProducts(action) {
  try {
    const response = yield call(api.get, `/category_products/${action.payload.category}`);
    console.tron.log(response);
    yield put(ProductsActions.getProduSuccess(response.data.products));
  } catch (err) {
    // yield put(ProductsActions.searchFailure('Erro ao buscar músicas'));
    console.tron.log('err');
  }
}
