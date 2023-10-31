import React from 'react'
import { TypeNavigation } from '../../constants/typesNavigation'
import { ButtonSaveDeck } from './BtnSaveDeck'
import { BtnShareCards } from './BtnShareCards'
import { Button, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useApp, useCards, useDeck } from '../../hooks'
import { useAppSelector } from '../../hooks/useReducerHook'
import { btnsHeader } from '../../styles';
import { Image } from 'react-native-animatable';
import { filterOn } from '../../assets/icons';

const style = btnsHeader

export const BtnsHeadersCard = ()=>{
  const builderWishedSelling = useAppSelector(state => state.app.builderWishedSelling)
  const {setBuildWishSell} = useApp()
  const { clearListCardsView } = useCards()
  
    switch (builderWishedSelling) {
      case TypeNavigation.game.deckBuilder: return(
        <View style={style.container}>
          <TouchableOpacity
            style={style.buttonBack}
            onPress={() => clearListCardsView()}
          >
            <Text style={style.textButtonBack}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.buttonCardBuy}
            onPress={() => setBuildWishSell(TypeNavigation.game.cardsWished)}
          >
            <Text style={style.textButton} >A cards buy</Text>
          </TouchableOpacity>
        </View>
      )
      case TypeNavigation.game.cardsWished: return(
        <View style={style.container}>
          <TouchableOpacity
            style={style.buttonBack}
            onPress={() => clearListCardsView()}
          >
            <Text style={style.textButtonBack}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.buttonCardSell}
            onPress={() => setBuildWishSell(TypeNavigation.game.cardsSelling)}
          >
            <Text style={style.textButton} >A cards sell</Text>
          </TouchableOpacity>
        </View>
      )
      case TypeNavigation.game.cardsSelling: return(
        <View style={style.container}>
          <TouchableOpacity
            style={style.buttonBack}
            onPress={() => clearListCardsView()}
          >
            <Text style={style.textButtonBack}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.buttonDeckBuilder}
            onPress={() => setBuildWishSell(TypeNavigation.game.deckBuilder)}
          >
            <Text style={style.textButton} >A deck builder</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }

export const BtnsHeadersCardSelecteds = ()=>{

  const builderWishedSelling = useAppSelector(state => state.app.builderWishedSelling)
  const listPicked = useAppSelector(state => state.cards.picked)
  const listWished = useAppSelector(state => state.cards.wished)
  const listSelling = useAppSelector(state => state.cards.selling)
  
  const {saveCardsPicked, saveCardsBuy, saveCardsSell} = useDeck()
  const {setBuildWishSell} = useApp()
  const { clearListCardsPicked, clearListCardsSelling, clearListCardsWished } = useCards()
  
    switch (builderWishedSelling) {
      case TypeNavigation.game.deckBuilder: return(
        <View style={style.container}>
          <TouchableOpacity
            style={style.buttonBack}
            onPress={() => clearListCardsPicked()}
          >
            <Text style={style.textButtonBack}>Clear</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.buttonCardBuy}
            onPress={() => {setBuildWishSell(TypeNavigation.game.cardsWished), saveCardsPicked(listPicked)}}
          >
            <Text style={style.textButton} >A cards buy</Text>
          </TouchableOpacity>
          <ButtonSaveDeck cards={listPicked}/>
        </View>
      )
      case TypeNavigation.game.cardsWished: return(
        <View style={style.container}>
          <TouchableOpacity
            style={style.buttonBack}
            onPress={() => clearListCardsWished()}
          >
            <Text style={style.textButtonBack}>Clear</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.buttonCardSell}
            onPress={() => {setBuildWishSell(TypeNavigation.game.cardsSelling), saveCardsBuy(listWished)}}
          >
            <Text style={style.textButton} >A cards sell</Text>
          </TouchableOpacity>
          <BtnShareCards message={`Busco:\n`} cards={listWished} titlePrompt={'Publicar compra'} guardarLista={saveCardsBuy(listWished)} />
        </View>
      )
      case TypeNavigation.game.cardsSelling: return(
        <View style={style.container}>
          <TouchableOpacity
            style={style.buttonBack}
            onPress={() => clearListCardsSelling()}
          >
            <Text style={style.textButtonBack}>Clear</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.buttonDeckBuilder}
            onPress={() => {setBuildWishSell(TypeNavigation.game.deckBuilder), saveCardsSell(listSelling)}}
          >
            <Text style={style.textButton} >A deck builder</Text>
          </TouchableOpacity>
          <BtnShareCards message={`Vendo:\n`} cards={listSelling} titlePrompt={'Publicar venta'} guardarLista={saveCardsSell(listSelling)} />
        </View>
      )
    }
  }

export const BtnsHeadersSearchCard = ({nameCard, setNameCard})=>{
  const builderWishedSelling = useAppSelector(state => state.app.builderWishedSelling)
  const { setModalFilter, setBuildWishSell } = useApp()
  const {saveCardsPicked, saveCardsBuy, saveCardsSell} = useDeck()
  const listPicked = useAppSelector(state => state.cards.picked)
  const listWished = useAppSelector(state => state.cards.wished)
  const listSelling = useAppSelector(state => state.cards.selling)

  const toggleModal = () => {
    setModalFilter(true)
  };
  
  switch (builderWishedSelling) {
    case TypeNavigation.game.deckBuilder: return(
      <View style={style.container}>
        <TextInput
          placeholder="Search card by name"
          onChangeText={setNameCard}
          value={nameCard}
          style={style.inputSearch}
          placeholderTextColor={'white'}
        />
        <TouchableOpacity
          style={style.buttonCardBuy}
          onPress={() => {setBuildWishSell(TypeNavigation.game.cardsWished), saveCardsPicked(listPicked)}}
        >
          <Text style={style.textButtonSearch} >A cards buy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>toggleModal()}
          style={{backgroundColor:'#3D0605', padding:10}}
        >
          <Image
            source={filterOn}
            style={{height:30, width:30}}
          />
        </TouchableOpacity>
      </View>
    )
    case TypeNavigation.game.cardsWished: return(
      <View style={style.container}>
        <TextInput
          placeholder="Search card by name"
          onChangeText={setNameCard}
          value={nameCard}
          style={style.inputSearch}
          placeholderTextColor={'white'}
        />
        <TouchableOpacity
          style={style.buttonCardSell}
          onPress={() => {setBuildWishSell(TypeNavigation.game.cardsSelling), saveCardsBuy(listWished)}}
        >
          <Text style={style.textButtonSearch} >A cards sell</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>toggleModal()}
          style={{backgroundColor:'#3D0605', padding:10}}
        >
          <Image
            source={filterOn}
            style={{height:30, width:30}}
          />
        </TouchableOpacity>
      </View>
    )
    case TypeNavigation.game.cardsSelling: return(
      <View style={style.container}>
        <TextInput
            placeholder="Search card by name"
            onChangeText={setNameCard}
            value={nameCard}
            style={style.inputSearch}
            placeholderTextColor={'white'}
        />
        <TouchableOpacity
          style={style.buttonDeckBuilder}
          onPress={() => {setBuildWishSell(TypeNavigation.game.deckBuilder), saveCardsSell(listSelling)}}
        >
          <Text style={style.textButtonSearch} >A deck builder</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>toggleModal()}
          style={{backgroundColor:'#3D0605', padding:10}}
        >
          <Image
            source={filterOn}
            style={{height:30, width:30}}
          />
        </TouchableOpacity>
      </View>
    )
  }
}