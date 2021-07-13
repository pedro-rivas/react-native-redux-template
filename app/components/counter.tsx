import React from 'react';
import { Text, Button, View, StyleSheet, } from 'react-native';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { incremented, decrement, incrementBy10, } from 'redux/slices';

const Counter: React.FC = () => {

    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    const add = () => dispatch(incremented());
    const add10 = () => dispatch(incrementBy10(10));
    const subtract = () => dispatch(decrement());

    return(
        <View style={styles.grap}>
            <Button title="+" onPress={add}/>
            <Text style={styles.txt}> { count } </Text>
            <Button title="-" onPress={subtract}/>
            <View style={styles.blankSpace}/>
            <Button title="Add 10" onPress={add10}/>
        </View>
    )
}

export default Counter;

const styles = StyleSheet.create({
    grap:{
        padding:20,
        marginVertical:20,
        backgroundColor: 'white',
    },
    txt:{
        fontSize:40,
        marginVertical:10,
        textAlign:'center',
    },
    blankSpace:{
        height:40,
        width: 40,
    }
});