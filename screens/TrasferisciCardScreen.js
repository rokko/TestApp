import React, { useEffect, useContext, useState } from 'react'
import { Text, View } from 'react-native'
import Input from '../components/Input'
import Button from '../components/Button'
import { AuthContext } from '../contexts/AuthContext'
import Alert from '../components/Alert'
import { BarCodeScanner } from 'expo-barcode-scanner';
import {layoutStyles} from '../styles/Layout'
import Spacer from '../components/Spacer'



export default function TrasferisciCardScreen(props) {

    const [inputCodice, setInputCodice] = useState('')
    const [messageOpen, setMessageOpen] = useState(false)
    const [error, setError] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [leggiQR, setLeggiQR] = useState(false)


    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, [leggiQR]);

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    let cartaDaTrasferire = props.route.params.otherParam

    const { token } = useContext(AuthContext)

    const params = {
        'card_id': cartaDaTrasferire.id,
        'portfolio_code': inputCodice,
    }



    const qrScansiona = () => {
        setLeggiQR(true)


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
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setInputCodice(data)

        alert(`Il codice è stato salvato , premi invia per inviare la carta`);
    };


    return (

        <>
            <Alert open={messageOpen} message={alertMessage} onClose={() => { error ? setMessageOpen() : tornaAllaLista() }} typology={error ? 'danger' : 'success'} />
            <View style={layoutStyles.sfondo}>
                <View style={[layoutStyles.contenuto, { justifyContent: 'center'}]}>
                    <Text>Inserisci il codice </Text>
                    <Input label='Inserisci qui il codice' onTextChange={(testo) => setInputCodice(testo)} />
                    <Button onPress={() => qrScansiona()}>Clicca qui se hai un QR CODE</Button>

                    {(leggiQR) &&
                        <BarCodeScanner
                            style={{ height: 500, width: 400, }}
                            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}

                        />}



                    <Spacer size={10}/>

                    <Button onPress={() => inviaCarta()}>Invia</Button>
                </View>
            </View>

        </>



    )

}