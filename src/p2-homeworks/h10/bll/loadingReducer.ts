

const initState = {
    isLoading : false
};

export type InitialStateType  = typeof initState

export const loadingReducer = (state = initState, action: CombinedActionType): InitialStateType => { // fix any
    switch (action.type) {
        case "IS-LOADING-SET": {
            return {...state, isLoading: action.value};
        }
        default: return state;
    }
};

export type LoadingType = {
  type : 'IS-LOADING-SET'
  value : boolean
}

type CombinedActionType = LoadingType

export const loadingAC = (value : boolean): LoadingType => ({ type : "IS-LOADING-SET", value }); // fix any

