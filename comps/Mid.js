import React,{useState} from 'react';
import {Text, View, Picker} from 'react-native';


function Mid(){
    return (
        <View style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'skyblue'}}>
            <Picker
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})
                }>
                <Picker.Item label="Blue" value="blue" />
                <Picker.Item label="Green" value="green" />
            </Picker>
        </View>
    );
}

export default Mid;