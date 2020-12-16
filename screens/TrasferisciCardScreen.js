import React , {useEffect, useContext, useState} from 'react'
import { Text } from 'react-native'
import Input from '../components/Input'
import Button from '../components/Button'
import {AuthContext} from '../contexts/AuthContext'


export default function TrasferisciCardScreen(props) {

    const [inputCodice, setInputCodice]= useState()

    let cartaDaTrasferire = props.route.params.otherParam

    const {token} = useContext(AuthContext)

    const params = {
        'card_id':cartaDaTrasferire.id,
        'portfolio_code': inputCodice,
    }

    
    console.log(token)


    const inviaCarta = () =>{
            fetch(`https://tree-rn-server.herokuapp.com/move-card`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token,
                },
                body: JSON.stringify(params),
                method: 'POST'
            })
            .then(response => response.json())
            .then(rispo => console.log(rispo))
        }

    return (
        <>
            <Text>Inserisci il codice </Text>
            <Input label = 'Inserisci qui il codice' onTextChange = {(testo)=>setInputCodice(testo)}/>
            <Text>Hai un QR Code?</Text>
            <Button onPress={() => inviaCarta()}>Invia</Button>

        </>
    )

}