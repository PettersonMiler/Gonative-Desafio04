import { call, put } from 'redux-saga/effects';
import api from 'services/api';

import { Creators as CategoriesActions } from 'store/ducks/categories';

export function* getCategories() {
  try {
    const response = yield call(api.get, '/categories');

    yield put(CategoriesActions.getCategSuccess(response.data));
  } catch (err) {
    // yield put(CategoriesActions.getCategoriesFailure('Erro ao buscar albuns'));
    console.tron.log(err);
  }
}
