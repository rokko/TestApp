import React, { useContext, useState, useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { AuthContext } from '../contexts/AuthContext'
import { CardContext } from '../contexts/CardContext'



export default function HomeScreen(props) {
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    const { user } = useContext(AuthContext)
    const { token } = useContext(AuthContext)
    const {cards} = useContext(CardContext)
    const {getCards} = useContext(CardContext)


    



    return (
        <View>
            <Text> Benvenuto </Text>
            <Text>{user.name}</Text>
            <Text>{date}</Text>

            <TouchableOpacity
           onPress={getCards(token)}>
                

                <Text >Carte : {cards.length + 1}</Text>
            </TouchableOpacity>

            <Text>Trasferimento : 293</Text>

        </View>


    )

}