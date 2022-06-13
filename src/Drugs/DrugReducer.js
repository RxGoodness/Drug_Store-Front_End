import { BUY_DRUG } from "./DrugType"

const initialState = {
    numberOfDrugs: 10
}
const DrugReducer=(state = initialState, action)=>{
 switch(action.type){
     case BUY_DRUG: return {
         ...state,
         numberOfDrugs: state.numberOfDrugs -1
     }
     default: return state
 }
}
export default DrugReducer