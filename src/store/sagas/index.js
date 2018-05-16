import { all, takeLatest } from 'redux-saga/effects';

import { Types as CategoriesTypes } from 'store/ducks/categories';
import { Types as ProductsActions } from 'store/ducks/products';
import { getCategories } from './categories';
import { getProducts } from './products';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.GET_REQUEST, getCategories),
    takeLatest(ProductsActions.GET_REQUEST, getProducts),
  ]);
}
