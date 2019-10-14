import React from 'react';
import {View, Text, Switch} from 'react-native'

function Top(){
    return (
        <View>
            <Switch style = {{
                justifyContent: "center",
                alignItems: "center",

            }} 
            />
            <Text>Day Mode</Text>
        </View>
    );
}

export default Top;