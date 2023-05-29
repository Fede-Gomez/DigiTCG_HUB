import React from 'react'
import { Button, FlatList, Text, View } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook'
import { CardDigimon } from '../../components/cards'
import Share from 'react-native-share';

const CardsWishedSelectedScreen = () => {
    const cards = useAppSelector(state => state.cards.listCardsWished)
    let message = 'Busco:\n'
    cards.forEach( e =>{
      message += e.count + ' ' + e.data.name + ' ' + e.data.cardNumber + '\n'
    })
    
    const renderItem = (item)=>{
        return <View style={{flexDirection:'column'}}>
          <CardDigimon card={item.item}/>
          <Text style={{alignSelf:'center'}}>{item.item.count}</Text>
        </View>
    }

    const shareMessage = async () => {
      const shareOptions = {
        title: 'Compartir la busqueda',
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
    cards.length == 0 
    ?   <Text>Agrega cartas</Text>
    :   <FlatList
            ListHeaderComponent={renderHeader}
            keyExtractor={(item) => item.id.toString()}
            data={cards}
            renderItem={renderItem}
            numColumns={3}
        />
  )
}

export default CardsWishedSelectedScreen