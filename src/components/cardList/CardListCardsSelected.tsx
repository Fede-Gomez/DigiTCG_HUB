import React, {useState} from 'react'
import { FlatList, Text, View, ImageBackground, Button } from 'react-native';
import { BtnsHeadersCardSelecteds, BtnAddRemoveCards, CardDigimon } from '../../components'
import { listCardsSelected } from '../../styles';
import { useAppSelector } from '../../hooks/useReducerHook';
import { TypeNavigation } from '../../constants/typesNavigation';

  const CardListCardsSelected = () => {
    const builderWishedSelling = useAppSelector(state => state.app.builderWishedSelling)
    const listPicked = useAppSelector(state => state.cards.picked)
    const listWished = useAppSelector(state => state.cards.wished)
    const listSelling = useAppSelector(state => state.cards.selling)
    const style = listCardsSelected

    const renderItem = ({item})=>{
        return <View style={style.container} >
          <CardDigimon card={item}/>
          <View style={style.buttonsAddRemove}>
            <BtnAddRemoveCards item={item}/>
          </View>
        </View>
    }
    const renderListEmpty = () => {
      return <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Text style={style.listEmpty}>
          Agrega cartas
        </Text>
      </View>
    }
    const renderHeader = () => {
      return (
        <View>
          <BtnsHeadersCardSelecteds />
          <Text style={
            builderWishedSelling == TypeNavigation.game.deckBuilder && style.titleDeckBuilder
            ||
            builderWishedSelling == TypeNavigation.game.cardsSelling && style.titleCardSell
            ||
            builderWishedSelling == TypeNavigation.game.cardsWished && style.titleCardBuy
          }>Estás en {builderWishedSelling}</Text>
        </View>
      );
    };
    return (
    <ImageBackground
      source={require('../../assets/backgrounds/cardSelected.jpg')}
      resizeMode='cover'
      style={{
        flex:1,
      }}
    >
      <FlatList
        ListEmptyComponent={renderListEmpty}
        data={
          builderWishedSelling == TypeNavigation.game.cardsSelling 
            ? listSelling : 
          builderWishedSelling == TypeNavigation.game.cardsWished 
            ? listWished : listPicked
        }
        renderItem={renderItem}
        numColumns={2}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
      />
    </ImageBackground>
  )
}

export default CardListCardsSelected