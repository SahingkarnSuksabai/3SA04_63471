import React, { useState } from "react";
import { ImageBackground, Text, StyleSheet } from 'react-native';
import { View } from "react-native";
import Forecast from "./Forecast";
import Constants from 'expo-constants';

export default function Weather(props){
    const [ForecastInfo, setForecastInfo] = useState({
        main: '',
        description: '',
        temp: 0
    })

    return (
        <ImageBackground source={require('../bg.jpg')} style={style.backdrop}>
            <View style={style.highlight}>
                <Text style={style.titleText}>Zip code is {props.zipCode}.</Text>
                <Forecast {...ForecastInfo}/>
            </View>
        </ImageBackground>
        
    );
}

const style = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    highlight: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width:"100%", 
        height:"45%", 
        paddingTop: Constants.statusBarHeight, 
        alignItems: 'center'
    },

    titleText: {
        fontSize: 32,
        fontWeight: "bold",
        color: 'white',
        textAlign: 'center'
    }
})