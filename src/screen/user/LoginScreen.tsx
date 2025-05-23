import React, { useEffect, useState } from 'react'
import { Text, View, TextInput, Button, ImageBackground, ActivityIndicator, Animated, Easing } from 'react-native';
import { useAccount } from '../../hooks/useAccount'
import { useNavigation } from '@react-navigation/native'
import { TypeNavigation } from '../../constants/typesNavigation'
import { login } from '../../styles'
import { useCards, useFaq, useFolders } from '../../hooks'
import { backgroundLoginScreen } from '../../assets/backgrounds';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { iconoContadorMemoria } from '../../assets/icons';


export const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation();
  const style = login;
  const {signIn, signInGoogle} = useAccount();
  const {loadFolders} = useFolders()
  const {getListFiltersOfCards, loadAllCards} = useCards()
  const { setQuestionAnswers, setAttackFlowChart, setAllErrataCards, setAllDateFaqsUpdate } = useFaq()
  const [renderStack, setRenderStack] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setRenderStack(true);
    }, 5000);
  }, [])
  
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:'1072600977089-ve400b0mqatkk3rhg67usi7l4p23fcf5.apps.googleusercontent.com',
    })
  }, [])

  useEffect(() => {
    loadFolders()
    getListFiltersOfCards()
    loadAllCards() //Carga todas las cartas para lo que es el filtrado
    setQuestionAnswers()
    setAllDateFaqsUpdate()
    setAttackFlowChart()
    setAllErrataCards()
  }, [])

  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(
      spinValue,
      {
       toValue: 1,
       duration: 500,
       easing: Easing.linear,
       useNativeDriver: true
      }
    )
   ).start();
  
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

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
                  setLoading(true),
                  signIn(email, password)
                    .catch(e=>setLoading(false))
                )}
              title='Login'
              disabled={loading == true}
            />
            <Button
              color={'black'}
              onPress={()=>navigation.navigate(TypeNavigation.account.signIn)}
              title='Create account'
              disabled={loading == true}
            />
          </View>
            <Text style={{alignSelf:'center', marginTop:40}}>
              <GoogleSigninButton
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                accessibilityHint='accessGoogle'
                onPress={()=>{
                  setLoading(true)
                  signInGoogle()
                    .catch(e=>setLoading(false))
                }}
                disabled={loading == true}
              />
            </Text>
          </View>
        )
      }
        {loading && 
          <Animated.Image
            source={iconoContadorMemoria}
            style={{height:50, width:50, alignSelf:'center', paddingBottom:100, transform: [{rotate: spin}]}}
          />
        }
    </ImageBackground>
  )
}
