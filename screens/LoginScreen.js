import React, { useContext, useState, createRef } from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import Spacer from '../components/Spacer'
import Title from '../components/Title'
import Form from '../components/Form'
import Button from '../components/Button'
import Alert from '../components/Alert'
import useForm from '../hooks/useForm'
import { AuthContext } from '../contexts/AuthContext'
import { layoutStyles } from '../styles/Layout'
import api from '../Utility/api'
import { rootNavigation } from '../Utility/navigation.js'
import colors from '../config/colors'


const inputs = [
  { label: 'Username', name: 'username_email', ref: createRef() },
  { label: 'Password', name: 'password', ref: createRef(), secureTextEntry: true },
]

export default function LoginScreen({ navigation, route }) {
  const requiredInputs = ['username_email', 'password']
  const [formData, setFormValue] = useForm(requiredInputs)
  const [error, setError] = useState(false)
  const [messageOpen, setMessageOpen] = useState(false)
  const { manageUserData } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)

  const onSignup = () => {
    navigation.navigate('Signup')

  }

  const submitLogin = async () => {
    try {
      setLoading(true)
      const response = await api.post('authentication/login-action', formData.values)
      const { result, errors, payload } = response

      if (result) {
        manageUserData(payload)
        rootNavigation.current.navigate('MainNavigator')
      } else {
        setError(errors[0].message)
        setMessageOpen(true)
      }

    } catch (err) {
      console.warn(err)
      setError(err)
      setMessageOpen(true)

    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={layoutStyles.container, layoutStyles.sfondo}>
      <Alert open={messageOpen} message={error} onClose={() => setMessageOpen()} typology={error ? 'danger' : 'success'} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Title label="Login" style={{ color: colors.yellow }} centerText />
        <Spacer size={7} />

        <View
          style={[layoutStyles.contenuto, layoutStyles.container]}>



          <Spacer size={5} />

          <Form inputs={inputs} updateInputValue={setFormValue} />

          <Button
            disabled={loading || !formData.valid}
            onPress={submitLogin}
          >Accedi</Button>

        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: colors.yellow }}>Hai dimenticato la password?</Text>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: colors.yellow }}>Non sei iscritto?</Text>
            <TouchableOpacity
              onPress={onSignup}>
              <Text style={{ color: colors.yellow }}> Registrati subito</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </View>




  )

}


