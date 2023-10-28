import React from 'react'
import { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground } from 'react-native';
import { useAccount } from '../../hooks/useAccount';
import { useNavigation } from '@react-navigation/native';
import { TypeNavigation } from '../../constants/typesNavigation';
import { signUp } from '../../styles';

const SignUpScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const {createAccount} = useAccount();
    const navigation = useNavigation();
    const style = signUp

    const reset = ()=>{
      setEmail('');
      setPassword('');
      setName('');
    }

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/loginScreen.jpg')}
      resizeMode='cover'
      style={{
        flex:1,        
      }}
    >
      <View style={style.container}>
          <Text style={style.text}>Name</Text>
          <TextInput
            onChangeText={(text)=>setName(text)} 
            style={style.inputText}
            keyboardType='email-address'
            value={name}
          />
          <Text style={style.text} >Email</Text>
          <TextInput 
            onChangeText={(text)=>setEmail(text)} 
            style={style.inputText}
            keyboardType='email-address'
            value={email}
          />
          <Text style={style.text} >Password</Text>
          <TextInput 
            onChangeText={(text)=>setPassword(text)} 
            secureTextEntry={true}
            value={password}
            style={style.inputText}
          />
          <View style={style.logCreteAccountResetContainer}>
            <Button
              color={'black'}
              onPress={()=>createAccount(name, email, password)}
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
    </ImageBackground>
  )
}

export default SignUpScreen