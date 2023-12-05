import React, {useState, useRef} from 'react'
import { Text, FlatList, View, TextInput, Dimensions } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook';
import FastImage from 'react-native-fast-image';

const QuestionAnswer = () => {
    const qa = useRef(useAppSelector(state => state.faq.qa))

    const [nameCard, setNameCard] = useState('');

    const renderItem = ({item})=>{
        return(
            <View
                style={{marginBottom:15}}
            >
                <FastImage
                    source={{
                        uri:item.img,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode='center'
                    style={{height:250, width:250, alignSelf:'center'}}
                /> 
                <View
                    style={{
                        width:Dimensions.get('screen').width-80
                    }}
                >
                <Text>{item.name+ ' '+ item.num}</Text>
                {item.qa?.map((currentValue, index)=>{
                    return (
                        <View>
                            <View>
                                <Text style={{alignSelf:'flex-start'}}>Q{index+1}</Text>
                                <Text style={{alignSelf:'flex-start'}}>{currentValue.question}</Text>
                            </View>
                            <View>
                                <Text style={{alignSelf:'flex-end'}}>A{index+1}</Text>
                                <Text style={{textAlign:'right'}}>{currentValue.answer}</Text>
                            </View>
                        </View>
                    )
                })}
                </View>
            </View>
        )
    }  

    const renderData = ()=>{
        if (nameCard !== ''){      
            return qa.current?.filter((card) => card.name?.toLowerCase().includes(nameCard.toLowerCase()))
          }
        return[];
    }

  return (
    <View
        style={{alignItems:'center'}}
    >
        <TextInput
          placeholder="Buscador por nombre"
          onChangeText={setNameCard}
          value={nameCard}
        //   style={style.searchCard}
          placeholderTextColor={'black'}
        />
        <FlatList
            data={renderData()}
            renderItem={renderItem}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            style={{height:Dimensions.get('screen').height/1.415}}
        />
    </View>
  )
}

export default QuestionAnswer