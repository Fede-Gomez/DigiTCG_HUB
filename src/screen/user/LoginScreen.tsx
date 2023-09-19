import React, { useState } from 'react'
import {Text, View, TextInput, Button} from 'react-native'
import { useAccount } from '../../hooks/useAccount'
import { useNavigation } from '@react-navigation/native'
import { TypeNavigation } from '../../constants/typesNavigation'
import { login } from '../../styles'


export const LoginScreen = () => {
  const [email, setEmail] = useState('Q@q.com')
  const [password, setPassword] = useState('123456')
  const navigation = useNavigation();
  const style = login;
  const {signIn} = useAccount();

  return (
    <View style={style.container}>
        <Text style={style.text}>Email</Text>
        <TextInput 
          onChangeText={(text)=>setEmail(text)} 
          style={style.inputText}
          keyboardType='email-address'
        />
        <Text style={style.text} >Password</Text>
        <TextInput 
          onChangeText={(text)=>setPassword(text)} 
          secureTextEntry={true}
          style={style.inputText}
        />
        <View style={style.logCreteAccountContainer}>
          <Button
            onPress={()=>signIn(email, password)}
            title='Login'
          />
          <Button
            onPress={()=>navigation.navigate(TypeNavigation.account.signIn)}
            title='Create account'
          />
        </View>
    </View>
  )
}
