import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'

export default function HeaderComponent(props) {
    return (
        <View style={{height:90}}>
            <TouchableOpacity onPress={props.onBack}>
                <Image style={{ width: 30, height: 30 }}
                    source={require('../assets/headers/back.png')} />
            </TouchableOpacity>
            <Text>{props.use.name}</Text>
           


        </View>


    )
}