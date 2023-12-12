import React, { useEffect, useState } from 'react'
import { Text, View, TextInput, Button, ImageBackground, ActivityIndicator } from 'react-native';
import { useAccount } from '../../hooks/useAccount'
import { useNavigation } from '@react-navigation/native'
import { TypeNavigation } from '../../constants/typesNavigation'
import { login } from '../../styles'
import { useCards, useFaq, useFolders } from '../../hooks'
import { backgroundLoginScreen } from '../../assets/backgrounds';


export const LoginScreen = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigation = useNavigation();
  const style = login;
  const {signIn} = useAccount();
  const {loadFolders} = useFolders()
  const {getListFiltersOfCards, loadAllCards} = useCards()
  const { setQuestionAnswers, setAttackFlowChart, setAllErrataCards } = useFaq()
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
    loadAllCards() //Carga todas las cartas para lo que es el filtrado
    setQuestionAnswers()
    setAttackFlowChart()
    setAllErrataCards()
  }, [])

  return (
    <ImageBackground
      source={backgroundLoginScreen}
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
            accessibilityHint='email'
          />
          <Text style={style.text}>Contraseña</Text>
          <TextInput 
            onChangeText={(text)=>setPassword(text)} 
            secureTextEntry={true}
            style={style.inputText}
            accessibilityHint='contraseña'
          />
          <View style={style.logCreteAccountContainer}>
            <Button
              color={'black'}
              onPress={()=>(
                  signIn(email, password),
                  setTimeout(() => {
                    setLoading(false)
                  }, 3500),
                  setLoading(true)
                )}
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
        {loading && <ActivityIndicator size="large" color="#0000ff" style={{ position:'absolute', top: '75%', left:'50%', right:'50%', justifyContent: 'center', alignItems: 'center' }} />}
    </ImageBackground>
  )
}
