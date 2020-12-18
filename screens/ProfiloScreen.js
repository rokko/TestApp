import React, { useContext, useState } from 'react'
import { Text, Image, View, ScrollView } from 'react-native'
import { AuthContext } from '../contexts/AuthContext'
import {CardContext} from '../contexts/CardContext'
import Button from '../components/Button'
import {layoutStyles} from '../styles/Layout'
import QRCode from 'react-native-qrcode-svg';


export default function ProfiloScreen() {
    const { setCards } = useContext(CardContext)
    const { token, onLogout, user } = useContext(AuthContext)
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
        <View style={layoutStyles.sfondo}>
        <ScrollView>
            <View style={[layoutStyles.contenuto,{justifyContent: 'center', alignItems: 'center'}]}>
            <Text style={{fontWeight: 'bold', fontSize:30,}} >Profilo</Text>
            <Image style={{ height: 150, width: 150, borderRadius: 20 }}
                source={require('../assets/avatar/avatar.png')} />

            <Text style={layoutStyles.testoNome}>{user.name}</Text>
            <Text style={layoutStyles.testoNome}>{user.email}</Text>
            {(cod == 'null')
                ? <Button onPress={ricaricaCode}>Genera Codice</Button>
                : (
                    <>
                        <Text style={[layoutStyles.testoNome, {fontStyle:'italic'}]}>{cod}</Text>
                        <Button onPress={ricaricaCode}>Cambia Codice</Button>
                    </>
                )
            }
            
                <View style={{ padding: 20, margin: 30, alignContent: 'center', borderWidth: 2, borderColor: "#808080" }}>

                    <QRCode
                        style={{ marginLeft: 80 }}
                        //QR code value
                        value={cod}
                        //size of QR Code
                        size={200}
                        //Color of the QR Code (Optional)
                        color="black"
                        //Background Color of the QR Code (Optional)
                        backgroundColor="white"

                    />
                </View>
                <Button onPress={() => {
                    setCards([])
                    onLogout()
                }}>Esci</Button>
           
            </View>
            </ScrollView>

       </View>
    )
}