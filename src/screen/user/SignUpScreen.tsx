import React from 'react'
import { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, ActivityIndicator } from 'react-native';
import { useAccount } from '../../hooks/useAccount';
import { useNavigation } from '@react-navigation/native';
import { TypeNavigation } from '../../constants/typesNavigation';
import { signUp } from '../../styles';
import { ErrorMessage } from '../../components';
import { backgroundLoginScreen } from '../../assets/backgrounds';

const SignUpScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const {createAccount} = useAccount();
    const navigation = useNavigation();
    const style = signUp
    const [loading] = useState(false)
    const reset = ()=>{
      setEmail('');
      setPassword('');
      setName('');
    }

  return (
    <ImageBackground
      source={backgroundLoginScreen}
      resizeMode='cover'
      style={{
        flex:1,        
      }}
    >
      <View style={style.container}>
          <Text style={style.text}>Nombre</Text>
          <TextInput
            onChangeText={(text)=>setName(text)} 
            style={style.inputText}
            keyboardType='email-address'
            value={name}
            accessibilityHint='nombre'
          />
          <Text style={style.text} >Email</Text>
          <TextInput 
            onChangeText={(text)=>setEmail(text)} 
            style={style.inputText}
            keyboardType='email-address'
            value={email}
            accessibilityHint='email'
          />
          <Text style={style.text} >Contraseña</Text>
          <TextInput 
            onChangeText={(text)=>setPassword(text)} 
            secureTextEntry={true}
            value={password}
            style={style.inputText}
            accessibilityHint='contraseña'
          />
          <View style={style.logCreteAccountResetContainer}>
            <Button
              color={'black'}
              onPress={()=>{
                if((name || email || password) == ''){
                  ErrorMessage('Complete Nombre Email y Contraseña')
                }else{
                  createAccount(name, email, password)
                }
              }
              }
              title='Create account'
            />
            <Button
              color={'black'}
              onPress={()=>reset()}
              title='Reset'
            />
            <Button
              color={'black'}
              onPress={()=>navigation.navigate(TypeNavigation.account.login)}
              title='Login'
            />
          </View>
      </View>
      {loading && <ActivityIndicator size="large" color="#0000ff" style={{ position:'absolute', top: '75%', left:'50%', right:'50%', justifyContent: 'center', alignItems: 'center' }} />}
    </ImageBackground>
  )
}

export default SignUpScreen