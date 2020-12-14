import React, { useContext } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { AuthContext } from '../contexts/AuthContext'



export default function HomeScreen(props) {
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    const { user } = useContext(AuthContext)
    const { token } = useContext(AuthContext)
    console.log(token)

    const numeroCarte = () => {
        fetch(('https://tree-rn-server.herokuapp.com/get-cards'), {
            method: 'GET',
            headers: { 'Authorization': token }
        })
            .then(response => response.json())
            .then(dati => console.log(dati))

    }
    return (
        <View>


            <Text> Benvenuto </Text>
            <Text>{user.name}</Text>
            <Text>{date}</Text>
            <TouchableOpacity>
                <Text>Carte</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={numeroCarte}>
                <Text>Trasferimento</Text>
            </TouchableOpacity>




        </View>
    )

}