import React, { useState, useRef, createRef, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { ScrollView, View , Text} from 'react-native'
import Checkbox from 'expo-checkbox';
import ScreenContainer from '../components/ScreenContainer'
import Input from '../components/Input'
import Spacer from '../components/Spacer'
import Title from '../components/Title'
import Button from '../components/Button'
import Form from '../components/Form'
import useForm from '../hooks/useForm'
import apis from '../config/apis'
import useFetch from '../hooks/useFetch'
import Alert from '../components/Alert'
import { layoutStyles } from '../styles/Layout'
import api from '../Utility/api'
import { rootNavigation } from '../Utility/navigation.js'

const inputs = [
  { label: 'Username', name: 'username', ref: createRef() },
  { label: 'Email', name: 'email', ref: createRef() },
  { label: 'Password', type: 'password', name: 'password', ref: createRef(), secureTextEntry: true },
  { label: 'Confirm Password', name: 'password_confirmation', ref: createRef(), secureTextEntry: true },
  { label: 'Name', name: 'name', ref: createRef() },
  { label: 'Surname', name: 'surname', ref: createRef() },
]


export default function SignupScreen(
  { navigation, route }
) {
  const requiredInputs = ['username', 'email', 'password', 'password_confirmation', 'name', 'surname']
  const [formData, setFormValue] = useForm(requiredInputs)
  const [isChecked, setChecked] = useState(false);
  const [error, setError] = useState(false)
  const [messageOpen, setMessageOpen] = useState(false)
  const { user, manageUserData } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)

  const submitSignup = async () => {
  

    try {
      setLoading(true)
      const { result, errors, payload } = await api.post('authentication/signup-action', formData.values)
      if (result) {
        manageUserData(payload)
        //rootNavigation.current.navigate('MainNavigator')
        navigation.navigate('Welcome')
      } else {
        setError(errors[0].message)
        setMessageOpen(true)
      }

    } catch (err) {
      setError(err)
      setMessageOpen(true)

    } finally {
      setLoading(false)
    }

  }


  return (
    <View style={{ flex: 1 }}>
      <Alert
        message={error}
        open={messageOpen}
        onClose={() => setMessageOpen(false)}
        typology={error ? 'danger' : 'success'}
      />

      <ScrollView
        /**
         * `keyboardShouldPersistTaps="handled"`
         * fa in modo che quando un input è in focus, se si clicca
         * su un'altra parte dello schermo la tastiera venga chiusa
        */
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false} // nasconde la scrollbar
        contentContainerStyle={layoutStyles.container}
        style={{ flexGrow: 1 }}
      >
        <Spacer size={10} />
        <Title label="Registrazione" centerText />
        <Spacer size={10} />

        <Form inputs={inputs} updateInputValue={(name, text) => setFormValue(name, text)} />
        <Checkbox   disabled={loading||!formData.valid} value={isChecked} onValueChange={setChecked} />
        <Text>Ho letto e accetto l'informativa sulla privacy.</Text>

        <Button
          disabled={loading || !formData.valid || (!isChecked)}
          onPress={submitSignup}
        > Registrati </Button>

        <Spacer size={10} />
      </ScrollView>
    </View>
  )
}