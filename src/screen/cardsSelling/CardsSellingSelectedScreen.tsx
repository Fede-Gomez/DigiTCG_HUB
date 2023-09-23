import React from 'react'
import { Button, FlatList, Text, View, ImageBackground } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook'
import { CardDigimon } from '../../components'
import Share from 'react-native-share';
import { listCardsSelected } from '../../styles';
import { useCards } from '../../hooks';

const CardsSellingSelectedScreen = () => {
    const cards = useAppSelector(state => state.cards.selling)
    const style = listCardsSelected
    const {addCardSelling, removeCardSelling} = useCards()
    let message = 'Vendo:\n'
    cards.forEach( e =>{
      message += e.count + ' ' + e.name + ' ' + e.cardNumber + '\n'
    })
    const add = (card)=>{
      addCardSelling(card)
    }
    const remove = (card)=>{
      removeCardSelling(card)        
    }
    const renderItem = ({item})=>{
      const {count} = item
      return <View style={style.container} >
        <CardDigimon card={item}/>
          <Text style={style.count}>{count}</Text>
        <View style={style.buttonsAddRemove}>
        <Button
          title='Add'
          onPress={()=>add(item)}
        />
        <Button
          title='Remove'
          onPress={()=>remove(item)}
        />
        </View>
      </View>
    }

    const shareMessage = async () => {
      const shareOptions = {
        title: 'Compartir la venta',
        message
      };
    
      try {
        await Share.open(shareOptions);
        console.log('Imagen compartida exitosamente');
      } catch (error) {
        console.log('Error al compartir la imagen:', error);
      }
    };

    const renderHeader = () => {
        return <View style={{flex:1, flexDirection:'row', justifyContent: 'space-around'}}>
          <Button 
            title={'Share cards'} 
            onPress={shareMessage}
          />
        </View>
    }

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/cardSelected.jpg')}
      resizeMode='cover'
      style={{
        flex:1,        
      }}
    >
      {cards.length == 0 
      ? <View style={style.addCardsContainer}>
          <Text style={style.addCards} >Agrega cartas</Text>
        </View>  
      :   <FlatList
              ListHeaderComponent={renderHeader}
              data={cards}
              renderItem={renderItem}
              numColumns={3}
          />}
    </ImageBackground>
  )
}

export default CardsSellingSelectedScreen