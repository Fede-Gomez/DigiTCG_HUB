import React, {useEffect} from 'react'
import { TouchableOpacity, FlatList, View, Image } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook';
import { useApp, useCards } from '../../hooks';
import { folder } from '../../styles';
import { msjHelp } from '../../constants/msjHelp';

const Folder = () => {
  const folders = useAppSelector(state => state.folder.folders)
  const { loadAllCardsPromo, loadAllCardsBt, loadAllCardsSt, loadAllCardsEx, loadAllCardsRb } = useCards();
  const {setMsjHelp} = useApp()
  const styleFolder = folder;
  
  useEffect(() => {
    setMsjHelp(msjHelp.folders)
}, [])


  const renderCards = (name:string)=>{
    switch (true) {
      case name.toLocaleLowerCase().includes('promo'):
          loadAllCardsPromo()
          break;
      case name.toLocaleLowerCase().includes('st'):
          loadAllCardsSt(name)
          break;
      case name.toLocaleLowerCase().includes('bt'):
          loadAllCardsBt(name)
          break;
      case name.toLocaleLowerCase().includes('ex'):
          loadAllCardsEx(name)
          break;
      case name.toLocaleLowerCase().includes('rb'):
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
              height: 220,
              width:'100%'
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
      style={{alignSelf:'center'}}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default React.memo(Folder) 