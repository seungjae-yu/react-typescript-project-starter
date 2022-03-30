import sampleReducer, { sampleState } from './sampleReducer';
import { combineReducers } from "redux";

export interface StoreState {
    //reducer 추가시 아래 형태로 추가
    //reducer : reducerState
    sampleReducer: sampleState
}

const rootReducer = combineReducers<StoreState>({
    //interface에 추가한 reducer 설정
    sampleReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;