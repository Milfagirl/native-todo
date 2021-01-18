import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

import {
    tempRequest,
    tempError,
    tempSuccess,
    townSelected
} from '../redux/actionCreator'

export default function Weather() {
    const { towns, selectedTown, temper, loadingTemp, errorTemp } = useSelector(state => state.weatherReducer);
    const dispatch = useDispatch();
    const API_KEY = '8c5c9cb26bd9e9ce57b1df54f20340c5'

    const getTemp = (value) => {
        dispatch(tempRequest())
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&lang=ru&appid=${API_KEY}`)
        .then(function (response) {
            console.log(response.data);
            dispatch(tempSuccess(response.data))
        })
        .catch(function (error) {
            console.log(error);
            dispatch(tempError(error))
        });

    }
        


    const handleTownChange = (value, index) => {
        dispatch(townSelected(value))
        const town = towns.filter((item => item.id === index.toString()))
        getTemp(town[0].name)

    }


    return (
        <View style={{ borderWidth: 1, borderColor: 'grey', borderRadius: 5, minWidth: 150}}>
            <Picker  
                selectedValue={selectedTown}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => handleTownChange(itemValue,itemIndex)}
                itemStyle={{ fontSize:20 }}
            >
                {towns.map((item) => <Picker.Item fontSize = '20' label={item.nameRU} value={item.nameRU} key={item.id} />)}
            </Picker>
        </View>
    )
}

