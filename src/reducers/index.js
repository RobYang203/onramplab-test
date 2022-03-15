import { combineReducers } from 'redux';
import setting from './settingReducer';
import properties from './properties';

const appReducer = combineReducers({
  setting,
  properties,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
