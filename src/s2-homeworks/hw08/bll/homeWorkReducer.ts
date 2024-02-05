import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if(action.payload === 'up') {
                const sortedState = state.slice().sort((a, b) => a.name.localeCompare(b.name));
                return sortedState // need to fix
            } else {
                const sortedState = state.slice().sort((a, b) => b.name.localeCompare(a.name));
                return sortedState
            }
        }
        case 'check': {

            return  state.filter(u => u.age >= 18)// need to fix
        }
        default:
            return state
    }
}
