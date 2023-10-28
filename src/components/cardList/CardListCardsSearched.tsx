import React, {useState} from 'react'
import { FlatList, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook';
import { useApp, useCards } from '../../hooks';
import { listCardsSearch, listCardsView } from '../../styles';
import CardDigimon from '../cards/CardDigimon';
import { filterOn } from '../../assets/icons'
import { BtnAddRemoveCards, ModalFilter } from '..';


const CardListCardsSearched = ({topTab}) => {
    const [nameCard, setNameCard] = useState('');
    const { setModalFilter } = useApp()

    const cards = useAppSelector(state => state.cards.searched)

    const style = listCardsSearch
    const styleCard = listCardsView;

    const filteredCards = cards?.filter((card) =>
      card.name?.toLowerCase().includes(nameCard.toLowerCase())
    );

      const toggleModal = () => {
        setModalFilter(true)
      };

    const renderItem = ({ item }) => (
        <View style={style.container}>
          <CardDigimon card={item}/>
          <View style={styleCard.buttonsAddRemove}>
          <BtnAddRemoveCards item={item} topTab={topTab}/>
        </View>
        </View>
      );
    const renderHeader = () => {
        return <View style={{flex:1, flexDirection:'row', justifyContent: 'space-around', alignItems:'center'}} >
        <TextInput
            placeholder="Search card by name"
            onChangeText={setNameCard}
            value={nameCard}
            style={style.search}
            placeholderTextColor={'white'}
        />
        <TouchableOpacity
          onPress={()=>toggleModal()}
        >
          <Image
            source={filterOn}
            style={{height:40, width:40}}
          />
        </TouchableOpacity>
        </View>
      }

  return <>
    <FlatList
        data={filteredCards}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        initialNumToRender={1}
        maxToRenderPerBatch={1}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
    />
    <ModalFilter />
  </>
}

export default CardListCardsSearched