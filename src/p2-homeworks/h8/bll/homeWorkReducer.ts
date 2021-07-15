import {UserType} from "../HW8";

export type SortActionType = {
    type : 'sort'
    payload : 'up' | 'down'
}
export type CheckActionType = {
    type : 'check'
    payload : number
}

export type CombinedActionType = SortActionType | CheckActionType

const sortUpComparator = ( a : UserType, b : UserType ) => {
    const user1 = a.name.toLowerCase()
    const user2 = b.name.toLowerCase()
    if (user1 > user2 )  {
        return 1
    }
    else if (user1 < user2 )  {
        return -1
    }
    return 0
}
const sortDownComparator = ( a : UserType, b : UserType ) => {
    const user1 = a.name.toLowerCase()
    const user2 = b.name.toLowerCase()
    if (user1 > user2 )  {
        return -1
    }
    else if (user1 < user2 )  {
        return 1
    }
    return 0
}

export const homeWorkReducer = (state: Array<UserType>, action: CombinedActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up'){
                return [...state].sort(sortUpComparator)
            } else if (action.payload === 'down') {
                return [...state].sort(sortDownComparator)
            }
            return state
        }
        case 'check': {
            return state.filter(user => user.age >= action.payload)
        }
        default:
            return state
    }
}


