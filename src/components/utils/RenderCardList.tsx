import React, { useCallback, useState } from 'react'
import { FlatList, View } from 'react-native'
import { listCardsView } from '../../styles';
import { TypeNavigation } from '../../constants/typesNavigation';
import CardDigimonView from '../cards/CardDigimonView';
import CardDigimonSelected from '../cards/CardDigimonSelected';
import CardDigimonDeck from '../cards/CardDigimonDeck';

const RenderCardList = ({data, header, empty, tabBar}) => {
    const style = listCardsView;

    const renderItem = useCallback(({ item })=>{
     return <View style={style.container}>
             {tabBar == 'Cartas' && <CardDigimonView card={item} />}
             {tabBar == TypeNavigation.game.cardSelected && <CardDigimonSelected card={item} />}
             {tabBar == TypeNavigation.game.deckBuilder && <CardDigimonDeck card={item} />}
           </View>
    },[data])

    const renderEmptyList = useCallback( empty(),[empty])

  return (
    <FlatList
        data={data}
        ListEmptyComponent={renderEmptyList}
        renderItem={renderItem}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        keyExtractor={item => item.id}
        style={{alignSelf:'center'}}
    />
  )
}

export default RenderCardList