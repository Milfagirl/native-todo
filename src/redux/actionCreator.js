export const TEMP_REQUEST = 'TEMP_REQUEST'
export const TEMP_ERROR = 'TEMP_ERROR'
export const TEMP_SUCCESS = 'TEMP_SUCCESS'
export const TOWN_SELECTED = 'TOWN_SELECTED'

export function tempRequest() {
    return { type: TEMP_REQUEST }
}
export function tempError(error) {
    return { type: TEMP_ERROR, payload: {error} }
}
export function tempSuccess(temper) {
    return { type: TEMP_SUCCESS, payload: {temper} }
}
export function townSelected(value) {
    return { type: TOWN_SELECTED, payload: {value} }
}

//----------------------------------------

export const TODO_ADD = 'TODO_ADD'
export const TODO_DELETE = 'TODO_DELETE'
export const TODO_INPUT_VALUE = 'TODO_INPUT_VALUE'
export const TODO_CHECK = 'TODO_CHECK'

export function todoAdd(item) {
    return { type: TODO_ADD, payload: {item}}
}
export function todoDelete(id) {
    return { type: TODO_DELETE, payload: {id}}
}
export function todoInputValue(value) {
    return { type: TODO_INPUT_VALUE, payload: {value}}
}
export function todoCheck(checkId,checkValue) {
    return { type: TODO_CHECK, payload: {checkId, checkValue}}
}