import { call, put } from '@redux-saga/core/effects';
import types from 'actions/types';
import { fetchPropertiesResult } from 'apis/properties';
import { groupBy, sumBy } from 'lodash';

const countPropertiesByStateAndCity = (data) => {
  const filerData = data.filter(({ state }) => state !== 'Georgia');
  const groupData = groupBy(filerData, ({ state, city }) => `${state}-${city}`);

  return Object.values(groupData).reduce((result, group) => {
    const priceSum = sumBy(group, 'price');
    const totalCount = group.length;

    return [
      ...result,
      {
        avg: priceSum / totalCount,
        totalCount,
        city: group[0].city,
        state: group[0].state,
      },
    ];
  }, []);
};
const OKGetList = (payload) => {
  return {
    type: types.GET_PROPERTY_LIST_SUCCESS,
    payload,
  };
};

const ErrGetList = (message) => {
  return {
    type: types.GET_PROPERTY_LIST_ERROR,
    globalMessage: {
      status: 'error',
      text: message,
    },
  };
};

export function* fetchPropertiesSaga() {
  try {
    const { data } = yield call(fetchPropertiesResult);

    yield put(OKGetList(countPropertiesByStateAndCity(data.properties)));
  } catch (error) {
    const message = error.response?.data?.data?.message || error.message;

    yield put(ErrGetList(message));
  }
}
