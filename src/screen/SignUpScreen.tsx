import React from 'react'
import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useAccount } from '../hooks/useAccount';
import { useNavigation } from '@react-navigation/native';
import { TypeNavigation } from '../constants/typesNavigation';

const SignUpScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const {createAccount} = useAccount();
    const navigation = useNavigation();

    const reset = ()=>{
      setEmail('');
      setPassword('');
      setName('');
    }

  return (
    <View>
        <Text>Name</Text>
        <TextInput 
          onChangeText={(text)=>setName(text)} 
          style={{backgroundColor:'red'}}
          keyboardType='email-address'
          value={name}
        />
        <Text>Email</Text>
        <TextInput 
          onChangeText={(text)=>setEmail(text)} 
          style={{backgroundColor:'red'}}
          keyboardType='email-address'
          value={email}
        />
        <Text>Password</Text>
        <TextInput 
          onChangeText={(text)=>setPassword(text)} 
          secureTextEntry={true}
          value={password}
        />
        <Button
          onPress={()=>createAccount(name, email, password)}
          title='Create account'
        />
        <Button
          onPress={()=>reset()}
          title='Reset'
        />
        <Button
          onPress={()=>navigation.navigate(TypeNavigation.account.login)}
          title='Login'
        />
    </View>
  )
}

export default SignUpScreen