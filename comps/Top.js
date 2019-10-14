import React, {useState} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native'

function Top(){
    const [TopText, setTopText] = useState("Top Comp");
    const [TopStyle, setTopStyle] = useState({
        backgroundColor: "#000000"
    });

    
    return (
        <View style = {styles.container}>
            <Switch style = {{
                margin: 20
            }}
    
            />

            <Text style = {{
                alignItems: 'center',
                alignContent: 'center',
                textAlign: 'center'
            }}
            >Day Mode</Text>
        </View>
    )
}
const styles = StyleSheet.create ({
    container: {
       flex: 1,
       alignItems: 'center',
       marginTop: 100
    }
}
);




export default Top;