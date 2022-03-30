import produce from 'immer';

// 1. Action Type
const LOAD_DATA = 'sample/LOAD_DATA';
const ADD_DATA = 'sample/ADD_DATA';   //or add

// 2. Action Creator
// change type any to your data Type
export const LoadDataAction = (data: any) => ({ type: LOAD_DATA, payload: data });
export const AddDataAction = (data: any) => ({ type: ADD_DATA, payload: data });

// 3. return types
export type sampleActions = ReturnType<typeof LoadDataAction> | ReturnType<typeof AddDataAction>;

// 4. State type
export interface sampleState {
    data: any;  //any to your data Type
}

// 5. initial State
const initialState: sampleState = {
    data: ""
};

// 6. reducer
const sampleReducer = (state: sampleState = initialState, action: sampleActions): sampleState => {
    switch (action.type) {
        case LOAD_DATA: {
            return produce(state, draft => { })
        }
        case ADD_DATA: {
            return produce(state, draft => { })
        }
        default: {
            return produce(state, draft => { })
        }
    }
}

export default sampleReducer;