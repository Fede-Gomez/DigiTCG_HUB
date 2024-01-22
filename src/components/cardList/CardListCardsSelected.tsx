import React, {useEffect} from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import { BtnsHeadersCardSelecteds, BtnImportDeck } from '../../components'
import { listCardsSelected } from '../../styles';
import { useAppSelector } from '../../hooks/useReducerHook';
import { TypeNavigation } from '../../constants/typesNavigation';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../../hooks';
import { msjHelp } from '../../constants/msjHelp';
import RenderCardList from '../utils/RenderCardList';

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

    const renderListEmpty = () => {
      return <View style={{ flex: 1, alignItems:'center'}}>
        <TouchableOpacity
          onPress={()=>navigation.navigate(TypeNavigation.game.cardsView, 0)}
          style={{
            marginTop:Dimensions.get('screen').height/5,
            marginBottom:50
          }}
        >
          <Text style={style.listEmpty}>
            Agrega cartas
          </Text>
        </TouchableOpacity>
        <BtnImportDeck />
      </View>
    }
    
    const renderData = ()=>{      
      if(builderWishedSelling == TypeNavigation.game.cardsSell)
        return listSelling
      if(builderWishedSelling == TypeNavigation.game.cardsBuy)
        return listWished       
      return listPicked
    }

    return (
    <RenderCardList
      data={renderData()}
      header={BtnsHeadersCardSelecteds}
      empty={renderListEmpty}
      tabBar={TypeNavigation.game.cardSelected}
    />
  )
}

export default CardListCardsSelected