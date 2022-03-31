import produce from 'immer';
//import your data type

// 1. Action Type
const LOAD_DATA = 'sample/LOAD_DATA';
const ADD_DATA = 'sample/ADD_DATA';
const REMOVE_DATA = 'sample/REMOVE_DATA';

// 2. Action Creator
// change type any to your data Type
export const LoadDataAction = (data: any[]) => ({ type: LOAD_DATA, payload: data });
export const AddDataAction = (data: any) => ({ type: ADD_DATA, payload: data });
export const RemoveDataAction = (items: any[]) => ({ type: REMOVE_DATA, payload: items });

// 3. return types
export type sampleActions = ReturnType<typeof LoadDataAction> | ReturnType<typeof AddDataAction> | ReturnType<typeof RemoveDataAction>;

// 4.
interface sampleItem { //extends data type
    id: number;
}
// 5. State type
export interface sampleState {
    items: sampleItem[];  //any to your data Type
}

// 6. initial State
const initialState: sampleState = {
    items: []
};

// 6. reducer
const sampleReducer = (state: sampleState = initialState, action: sampleActions): sampleState => {
    switch (action.type) {
        case LOAD_DATA: {
            return produce(state, draft => { });
        }
        case ADD_DATA: {
            return produce(state, draft => { });
        }
        case REMOVE_DATA: {
            return produce(state, draft => { });
        }
        default: {
            return produce(state, draft => { });
        }
    }
}

export default sampleReducer;