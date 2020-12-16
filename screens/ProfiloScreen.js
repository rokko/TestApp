import React, { useContext, useState } from 'react'
import { Text, Image } from 'react-native'
import { AuthContext } from '../contexts/AuthContext'
import Button from '../components/Button'
import QRCode from 'react-native-qrcode-svg';


export default function ProfiloScreen() {
    const { user } = useContext(AuthContext)
    const { token } = useContext(AuthContext)
    const [cod, setCod] = useState(user.portfolio_code)


    const ricaricaCode = () => {
        fetch(('https://tree-rn-server.herokuapp.com/refresh-portfolio-code'), {
            method: 'POST',
            headers: { 'Authorization': token }
        })
            .then(response => response.json())
            .then(dati => {

                if (dati.result == true) {
                    setCod(dati.payload.portfolio_code)
                }

            })


    }





    return (
        <>
            <Text>Profilo</Text>
            <Image style={{ height: 50, width: 50, borderRadius: 20 }}
                source={require('../assets/avatar/avatar.png')} />

            <Text>{user.name}</Text>
            <Text>{user.email}</Text>
            {(cod == 'null')
                ? <Button onPress={ricaricaCode}>Genera Codice</Button>
                : (
                    <>
                        <Text>{cod}</Text>
                        <Button onPress={ricaricaCode}>Cambia Codice</Button>
                    </>
                )
            }
            <Text>Il tuo qr code</Text>
            <QRCode
                //QR code value
                value={cod}
                //size of QR Code
                size={250}
                //Color of the QR Code (Optional)
                color="black"
                //Background Color of the QR Code (Optional)
                backgroundColor="white"
                />

        </>
    )
}