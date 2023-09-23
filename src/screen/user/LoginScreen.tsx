import React, { useEffect, useState } from 'react'
import {Text, View, TextInput, Button} from 'react-native'
import { useAccount } from '../../hooks/useAccount'
import { useNavigation } from '@react-navigation/native'
import { TypeNavigation } from '../../constants/typesNavigation'
import { login } from '../../styles'
import { useCards, useFolders } from '../../hooks'


export const LoginScreen = () => {
  const [email, setEmail] = useState('Q@q.com')
  const [password, setPassword] = useState('123456')
  const navigation = useNavigation();
  const style = login;
  const {signIn} = useAccount();
  const {loadFolders} = useFolders()
  const {getListFiltersOfCards, loadAllCards} = useCards()


  useEffect(() => {
    loadFolders()
    getListFiltersOfCards()
    loadAllCards()
  }, [])

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
            // onPress={()=>            navigation.navigate(TypeNavigation.game.homeGameTopBar)}
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
