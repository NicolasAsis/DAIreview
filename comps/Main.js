import React from 'react';
import {View} from 'react-native';
import Top from './Top';
import Mid from './Mid';
import Bot from './Bot';


function Main(){
    return (
        <View>
            <Top />
            <Mid />
            <Bot />
        </View>
    );
}

export default Main;