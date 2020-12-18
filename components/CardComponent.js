import React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Image, View } from 'react-native'
import { images } from '../config/immagini'

export default function CardComponent(props) {


    const imgSource = (images[props.carte.game]) ? images[props.carte.game].uri : images.naruto.uri
    //////Grazie a GabyCN per lo switch




    return (
        <View style={{justifyContent:'center'}}>
        <Card >
            <View style={{ flexDirection: 'row', padding:10, borderRadius: 10, margin : 10, borderRadius:5  }}>
                <Card.Content >
                    <Image style={{ height: 50, width: 50, }}
                        source={imgSource} />
                </Card.Content>
                <Card.Content>
                    <Title>{props.carte.name}</Title>
                    <Paragraph>{props.carte.game}</Paragraph>
                </Card.Content>

            </View>
            <Card.Actions>

                <Button onPress={() => props.goCard(props.carte, imgSource)}>Dettagli Carta</Button>

            </Card.Actions>
        </Card>
        </View>
    )

}