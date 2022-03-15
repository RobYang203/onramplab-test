import types from 'actions/types';
import { takeLatest } from 'redux-saga/effects';
import { fetchPropertiesSaga } from './propertiesSaga';

export function* watchFetchPropertiesSaga() {
  yield takeLatest(types.GET_PROPERTY_LIST, fetchPropertiesSaga);
}
