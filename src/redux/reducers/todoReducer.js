import {
    TODO_ADD,
    TODO_DELETE,
    TODO_INPUT_VALUE,
    TODO_CHECK

} from '../actionCreator'

const initialState = {
    items: [],
    inputValue: '',
    
}

export default function todoReducer(state = initialState, action) {
  
    switch (action.type) {
        case TODO_ADD:
            const { item } = action.payload
            return { ...state, items: [...state.items, item] };
        case TODO_DELETE:
            const { id } = action.payload
            return { ...state, items: state.items.filter((o) => o.id !== id)};
        case TODO_INPUT_VALUE:
            const {value} = action.payload
            return { ...state, inputValue: value};
        case TODO_CHECK:
            const {checkId, checkValue} = action.payload
            state.items.find((o) => o.id === checkId).checked = checkValue
            return { ...state, items: [...state.items]}
            
        default:
            return state;
    }

}