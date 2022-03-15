import { propertiesState } from './initialState';
import types from 'actions/types';

export default function routeReducer(
  properties = propertiesState,
  { type, payload }
) {
  switch (type) {
    case types.GET_PROPERTY_LIST_SUCCESS:
      return { list: payload };
    case types.GET_PROPERTY_LIST:
    case types.GET_PROPERTY_LIST_ERROR:
    default:
      return properties;
  }
}
