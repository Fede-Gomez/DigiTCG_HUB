import React, {useEffect} from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { BtnsHeadersCardSelecteds, BtnAddRemoveCards, CardDigimon } from '../../components'
import { listCardsSelected } from '../../styles';
import { useAppSelector } from '../../hooks/useReducerHook';
import { TypeNavigation } from '../../constants/typesNavigation';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../../hooks';
import { msjHelp } from '../../constants/msjHelp';

  const CardListCardsSelected = () => {
    const navigation = useNavigation()

    const builderWishedSelling = useAppSelector(state => state.app.builderWishedSelling)
    const listPicked = useAppSelector(state => state.cards.picked)
    const listWished = useAppSelector(state => state.cards.wished)
    const listSelling = useAppSelector(state => state.cards.selling)

    const {setMsjHelp} = useApp()
    
    useEffect(() => {
      setMsjHelp(msjHelp.cartasSeleccionadas)
    }, [])
    

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
        <TouchableOpacity
          onPress={()=>navigation.navigate(TypeNavigation.game.cardsView)}
        >
          <Text style={style.listEmpty}>
            Agrega cartas
          </Text>
        </TouchableOpacity>
      </View>
    }
    const renderHeader = () => {
      return (<BtnsHeadersCardSelecteds />);
    };
    return (
    <FlatList
      ListEmptyComponent={renderListEmpty}
      data={
        builderWishedSelling == TypeNavigation.game.cardsSell 
          ? listSelling : 
        builderWishedSelling == TypeNavigation.game.cardsBuy 
          ? listWished : listPicked
      }
      renderItem={renderItem}
      numColumns={2}
      stickyHeaderIndices={[0]}
      ListHeaderComponent={renderHeader}
      showsVerticalScrollIndicator={false}
      removeClippedSubviews={true}
    />
  )
}

export default CardListCardsSelected