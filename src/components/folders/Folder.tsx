import React, {useEffect} from 'react'
import { TouchableOpacity, FlatList, View, Image, Dimensions } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook';
import { useCards } from '../../hooks';
import { folder } from '../../styles';

const Folder = () => {
  const folders = useAppSelector(state => state.folder.folder)
  const { loadAllCardsBt, loadAllCardsSt, loadAllCardsEx, loadAllCardsRb } = useCards();
  const styleFolder = folder;

  const renderCards = (name:string)=>{
    
    switch (true) {
      case name.includes('st'):
          loadAllCardsSt(name)
          break;
      case name.includes('bt'):
          loadAllCardsBt(name)
          break;
      case name.includes('ex'):
          loadAllCardsEx(name)
          break;
      case name.includes('rb'):
          loadAllCardsRb(name)
          break;
      default:
          break;
    }
  }

  const renderItem = ({item})=>{    
    return (
      <TouchableOpacity 
        onPress={()=> renderCards(item.name)}
      >
        <View style={styleFolder.containerImg}>
          <Image
            source={{uri:item.img}}
            style={{
              height: 210,
            }}
          />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      data={folders}
      renderItem={renderItem}
      numColumns={3}
      removeClippedSubviews={true}
      maxToRenderPerBatch={10}
    />
  )
}

export default Folder