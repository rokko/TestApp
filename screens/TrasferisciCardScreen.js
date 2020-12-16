import React, { useEffect, useContext, useState } from 'react'
import { Text, View } from 'react-native'
import Input from '../components/Input'
import Button from '../components/Button'
import { AuthContext } from '../contexts/AuthContext'
import Alert from '../components/Alert'

export default function TrasferisciCardScreen(props) {

    const [inputCodice, setInputCodice] = useState('')
    const [messageOpen, setMessageOpen] = useState(false)
    const [error, setError] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')

    let cartaDaTrasferire = props.route.params.otherParam

    const { token } = useContext(AuthContext)

    const params = {
        'card_id': cartaDaTrasferire.id,
        'portfolio_code': inputCodice,
    }



    const tornaAllaLista = () => {
        props.navigation.navigate('Carte')
    }

    const inviaCarta = () => {
        fetch(`https://tree-rn-server.herokuapp.com/move-card`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: token,
            },
            body: JSON.stringify(params),
            method: 'POST'
        })
            .then(response => response.json())
            .then(rispo => {
                console.log(rispo)
                if (rispo.result == true) {
                    setMessageOpen(true)
                    setError(false)
                    setAlertMessage('Il trasferimento è avvenuto con successo')
                }
                if (rispo.result == false) {
                    setMessageOpen(true)
                    setError('danger')
                    setAlertMessage(rispo.errors[0].message)
                }

            })
    }

    return (
        <View>

            <Alert open={messageOpen} message={alertMessage} onClose={() => { error ? setMessageOpen() : tornaAllaLista() }} typology={error ? 'danger' : 'success'} /> 
            <View>
                <Text>Inserisci il codice </Text>
                <Input label='Inserisci qui il codice' onTextChange={(testo) => setInputCodice(testo)} />
                <Text>Hai un QR Code?</Text>
                <Button onPress={() => inviaCarta()}>Invia</Button>
            </View>
        </View>


    )

}