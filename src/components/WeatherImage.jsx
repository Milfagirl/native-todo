import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useSelector, useDispatch } from 'react-redux';
import { cloud } from '../images/cloud.png'
import { tempError } from '../redux/actionCreator';


export default function WeatherImage() {
    const { temper, selectedTown, loadingTemp, errorTemp } = useSelector(state => state.weatherReducer);
    const newtemp = loadingTemp ? 'Loading...' : temper.main.temp

    return (
        <>
            <Image style={styles.img} source={require('../images/cloud.png')} />
            <Text style={{ fontSize: 20, marginLeft: 10 }}>{`${Math.trunc(Number(newtemp))} °C`}</Text>
        </>
    )
}


const styles = StyleSheet.create({
    img: {
        width: 50,
        height:50
    },
});
