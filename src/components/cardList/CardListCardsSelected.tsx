import React from 'react'
import { FlatList, Text, View, ImageBackground } from 'react-native';
import { BtnsHeader, BtnAddRemoveCards, CardDigimon } from '../../components'
import { listCardsSelected } from '../../styles';

  const CardListCardsSelected = ({topTab, cards}) => {
    const style = listCardsSelected

    const renderItem = ({item})=>{
        const {count} = item
        return <View style={style.container} >
          <CardDigimon card={item}/>
            <Text style={style.count}>{count}</Text>
          <View style={style.buttonsAddRemove}>
            <BtnAddRemoveCards item={item} topTab={topTab}/>
          </View>
        </View>
    }

    const renderHeader = () => {
        return <View style={style.headerList}>
          <BtnsHeader topTab={topTab} cards={cards} />
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
      {cards == 0 
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

export default CardListCardsSelected