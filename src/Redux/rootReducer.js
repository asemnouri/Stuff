import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import ticketReducer from './ticket/ticketReducer';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['user']
}

const rootReducer = combineReducers({
  user: ticketReducer,
  
});

export default persistReducer(persistConfig, rootReducer)