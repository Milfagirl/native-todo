import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { useSelector, useDispatch } from 'react-redux';


import {
    todoAdd,
    todoDelete,
    todoInputValue,
    todoCheck
} from '../redux/actionCreator'

export default function TodoList() {

    const { items, inputValue } = useSelector(state => state.todoReducer);

    const dispatch = useDispatch();

    const onChangeText = (text) => dispatch(todoInputValue(text))

    const handleAdd = () => {
        inputValue && dispatch(todoAdd({ id: Date.now().toString(), value: inputValue, checked: false }))
        dispatch(todoInputValue(''))
    }

    const handelCheckBox = (id, checked) => dispatch(todoCheck(id, !checked))

    const handleDelete = ({ id }) => dispatch(todoDelete(id))



    return (
        <View style={styles.Container}>
            <Text style={{ fontSize: 20 }}>Список задач</Text>
            <View style={styles.InputView}>
                <View style={{ flex: 5}}>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 5, borderRadius: 5 }}
                        onChangeText={text => onChangeText(text)}
                        value={inputValue}
                        placeholder={'Название задачи ...'}
                    />
                </View>
                <View style={{ borderRadius: 10, flex: 1, height: 40, alignItems: 'stretch', flexDirection: 'row', minWidth: 50, marginLeft: 10, justifyContent: 'flex-end' }}>
                    <Button
                        title="Добавить"
                        onPress={handleAdd}
                    />
                </View>

            </View>
            <ScrollView style={styles.List}>
                {items.map((o) => {
                    return (
                        <View style={o.checked ? styles.ItemIsChecked : styles.ItemNotChecked} key={o.id}>
                            <CheckBox
                                value={o.checked}
                                onValueChange={() => handelCheckBox(o.id, o.checked)}
                                style={styles.ItemCheckbox}
                            />
                            <Text style={styles.ItemText}>{o.value}</Text>
                            <Button
                                title="X"
                                color='red'
                                onPress={() => handleDelete(o)} />
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )


}

const styles = StyleSheet.create({
    Container: {
        paddingHorizontal: 20,
    },
    InputView: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    List: {
        marginTop: 10,
        flexDirection: 'column'
    },
    ItemCheckbox: {
        alignSelf: "center",
    },
    ItemText: {
        flex: 3,
        alignSelf: 'center'
    },
    ItemIsChecked: {
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: 'gray',
        marginTop: 5,
        backgroundColor: 'silver'
    },
    ItemNotChecked: {
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: 'gray',
        marginTop: 5,
        backgroundColor: 'white'
    },

});