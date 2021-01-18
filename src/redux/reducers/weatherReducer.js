import {
    TEMP_REQUEST,
    TEMP_SUCCESS,
    TEMP_ERROR,
    TOWN_SELECTED


} from '../actionCreator'

const initialState = {
    towns: [
        {id: '0', name: 'Moscow,ru', nameRU: 'Москва'},
        {id: '1', name: 'Tokyo,JP', nameRU: 'Токио'},
        {id: '2', name: 'Voronezh,RU', nameRU: 'Воронеж'},
        {id: '3', name: 'Paris,FR', nameRU: 'Париж'},
        {id: '4', name: 'Samara,RU', nameRU: 'Самара'},
        {id: '5', name: 'Sochi,RU', nameRU: 'Сочи'},
        {id: '6', name: 'Kazan’,RU', nameRU: 'Казань'},
        {id: '7', name: 'Toronto,CA', nameRU: 'Торонто'}
    ],
    selectedTown: 'Москва',
    temper: {main: {temp :5}},
    loadingTemp: false,
    errorTemp: null
}

export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case TEMP_REQUEST:
            return { ...state, loading: true, error: null };
        case TEMP_ERROR:
            const { error } = action.payload
            return { ...state, loading: false, error };
        case TEMP_SUCCESS:
            const { temper } = action.payload
            return { ...state, loading: false, error: null, temper };
        case TOWN_SELECTED:
            const {value} = action.payload
            return {...state, selectedTown: value}     


        default:
            return state;
    }

}