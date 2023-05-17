import React, { useState, useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DeckBuilderScreen } from './DeckBuilderScreen';
import { TcgPlayerScreen } from './TcgPlayerScreen';
import firestore from '@react-native-firebase/firestore'

const Tab = createMaterialTopTabNavigator();


export const HomeScreen = () => {

const [data, setData] = useState([])
  
  
  const type = ['digimons', 'options', 'tamers']
  const expan = ['promo']

  let cartas = []
  const agregarCartas = (items) =>{
    items.forEach( item =>{
      cartas.push(item.data())
    })    
    setData(cartas)
    console.log(data);
    
  }

  const getinfoFirebase = async (expansion, tipo)=>{
    await firestore().collection('cardsDigimon').doc(expansion).collection(tipo).get().then( items  => agregarCartas(items))
  }
  const loadData= async ()=>{
    try{
      type.forEach( tipo =>{ 
        expan.forEach( async expansion =>{
          getinfoFirebase(expansion, tipo)
        })
      })      
    }catch(e){
      console.log(e);
    }
  }


  useEffect(() => {
    console.log('este es data, el otro no ',data);
    loadData();

}, [])


  return (
      <Tab.Navigator>
        <Tab.Screen name="Tcg Player" component={TcgPlayerScreen} />
      </Tab.Navigator>
  )
}
