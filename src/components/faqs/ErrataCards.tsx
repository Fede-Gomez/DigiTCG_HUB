import React, {useRef} from 'react'
import { FlatList, Text, View } from 'react-native'
import { useAppSelector } from '../../hooks/useReducerHook';
import FastImage from 'react-native-fast-image';
import { errataCards } from '../../styles';

const ErrataCards = () => {
  const errata = useRef(useAppSelector(state => state.faq.errata))
  const style = errataCards

  const renderItem = ({item})=>{
    const {cardErrata, imgsCard, name, cardNumber, date, errataNote} = item    
    const {before, after} = cardErrata
    return(
      <View style={style.container}>
        <View 
         style={style.containerInfoGral}>
          <Text style={{...style.textInfoGral, color:'blue'}}>{date}</Text>
          <Text style={{...style.textInfoGral, color:'yellow'}}>{cardNumber}  {name}</Text>
        </View>
        {imgsCard.map(img=>{
          return <FastImage
            source={{uri:img}}
            style={{ width: 300, height: 350, marginBottom:15 }}
            resizeMode='contain'
          />
        })}
        <View style={style.containerInfoErrata}>
          <Text style={{...style.textInfoErrata, color:'blue',}}>Card Errata</Text>
          <Text style={{...style.textInfoErrata, color:'white', backgroundColor:'red', width:75, textAlign:'center'}}>Before</Text>
          <Text style={{...style.textInfoErrata, color:'red',}}>{before}</Text>
          <Text style={{...style.textInfoErrata, color:'white', backgroundColor:'green', width:75, textAlign:'center'}}>After</Text>
          <Text style={{...style.textInfoErrata, color:'green',}}>{after}</Text>
          <Text style={{...style.textInfoErrata, color:'purple',}}>{errataNote}</Text>
        </View>
      </View>
    )
  }
  return (
    <FlatList
      data={errata.current}
      renderItem={renderItem}
    />
  )
}

export default ErrataCards