import { legacy_createStore as createStore } from 'redux';

import Reducer from './counterReducer';

const store = createStore(Reducer);

export default store;