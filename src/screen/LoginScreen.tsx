import React, { useState } from 'react'
import {Text, View, TextInput, Button} from 'react-native'
import { useAccount } from '../hooks/useAccount'
import { useNavigation } from '@react-navigation/native'
import { TypeNavigation } from '../constants/typesNavigation'

export const LoginScreen = () => {
  const [email, setEmail] = useState('Q@q.com')
  const [password, setPassword] = useState('123456')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const navigation = useNavigation();
  const {signIn} = useAccount();

  return (
    <View>
        <Text>Email</Text>
        <TextInput 
          onChangeText={(text)=>setEmail(text)} 
          style={{backgroundColor:'red'}}
          keyboardType='email-address'
        />
        <Text>Password</Text>
        <TextInput 
          onChangeText={(text)=>setPassword(text)} 
          secureTextEntry={true}
        />
        <Button
          onPress={()=>signIn(email, password)}
          title='Login'
        />
        <Button
          onPress={()=>navigation.navigate(TypeNavigation.account.signIn)}
          title='Create account'
        />
    </View>
  )
}
