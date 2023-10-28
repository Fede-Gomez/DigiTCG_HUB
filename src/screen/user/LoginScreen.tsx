import React, { useEffect, useState } from 'react'
import { Text, View, TextInput, Button, ImageBackground, ActivityIndicator } from 'react-native';
import { useAccount } from '../../hooks/useAccount'
import { useNavigation } from '@react-navigation/native'
import { TypeNavigation } from '../../constants/typesNavigation'
import { login } from '../../styles'
import { useApp, useCards, useFolders } from '../../hooks'


export const LoginScreen = () => {
  const [email, setEmail] = useState('Q@q.com')
  const [password, setPassword] = useState('123456')
  const navigation = useNavigation();
  const style = login;
  const {signIn} = useAccount();
  const {loadFolders} = useFolders()
  const {getListFiltersOfCards, loadAllCards} = useCards()

  const [renderStack, setRenderStack] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setRenderStack(true);
    }, 5000);
  }, [])
  useEffect(() => {
    loadFolders()
    getListFiltersOfCards()
    loadAllCards()
  }, [])

  return (

    <ImageBackground
    source={require('../../assets/backgrounds/loginScreen.jpg')}
    resizeMode='cover'
    style={{
      flex:1,        
    }}
    >
      {
        renderStack && (
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
              color={'black'}
              onPress={()=>(signIn(email, password), setLoading(true))}
              title='Login'
            />
            <Button
              color={'black'}
              onPress={()=>navigation.navigate(TypeNavigation.account.signIn)}
              title='Create account'
            />
          </View>
        </View>
        )
      }
        {loading && <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />}
    </ImageBackground>
  )
}
