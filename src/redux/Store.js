import { createStore } from 'redux';
import DrugReducer from '../Drugs/DrugReducer';

const store = createStore(DrugReducer)

export default store 