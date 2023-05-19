import React, { useState } from 'react'
import { Text, View, Image, FlatList, Dimensions, Button, Alert, Pressable } from 'react-native'
import { useAppDispatch, useAppSelector } from '../hooks/useReducerHook'

export const DeckBuilderScreen = () => {

  const cards = useAppSelector(state => state.cards.listCards)

const renderItem = (item)=>{
  const {name, color, id, imgUrl} = item.item.data;
  return <View
            style={{flexDirection:'row'}} 
            key={id}
          >
            <Image
              style={{ height: 300, width: Dimensions.get('screen').width-200 }}
              source={{uri:imgUrl}} 
            />
            <View>
              <Text>Name: {name}</Text>
              <Text>Color: {color}</Text>
            </View>
        </View>
}

const [modalVisible, setModalVisible] = useState(false);

return (
  <>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <Button
        title='Deck Selected'
      />
      <Button
        title='Card Selected'
      />
      <Button
        title='Filter'
      />
      <Button
        title='Search'
      />
    </View>

    <FlatList
      data={cards}
      renderItem={renderItem}
    />
  </>

  )
}
