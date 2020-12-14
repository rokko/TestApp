import React , {useContext} from 'react'
import { Text, View } from 'react-native'
import {AuthContext} from '../contexts/AuthContext'

export default function HomeScreen(props) {
    const { user } = useContext(AuthContext)
    return (
        <View>
            
           
            <Text> Bevenuto </Text>
            <Text>{user.name}</Text>
            



        </View>
    )

}