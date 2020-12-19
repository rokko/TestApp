import React, { useContext, useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { AuthContext } from '../contexts/AuthContext'
import { layoutStyles } from '../styles/Layout'
import colors from '../config/colors'

export default function HeaderComponent(props) {
    const { token } = useContext(AuthContext)
    const [visAvatar, setVisAvatar] = useState(false)

    useEffect(() => {
        if (token) { setVisAvatar(true) }
        else { setVisAvatar(false) }
    }
        , [token])

    return (
        <View style={layoutStyles.headerStile}>
            <Text style={{ color: colors.yellow }}> Nome App </Text>
            {(visAvatar) && <Image style={{ height: 30, width: 30 }} source={require('../assets/avatar/avatar.png')} />}
        </View>
    )
}