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
                    resizeMode='contain'
                    style={{ width: 300, height: 350, alignSelf:'center'}}
                /> 
                <View
                    style={{
                        width:Dimensions.get('screen').width-80
                    }}
                >
                <Text style={{marginTop:10,backgroundColor:'blue', padding:10, color:'white', fontSize:25}}>{item.name+ ' '+ item.num}</Text>
                {item.qa?.map((currentValue, index)=>{
                    return (
                        <View>
                            <View style={{
                                backgroundColor:'#E5F7F8',
                                padding:5
                            }}>
                                <Text style={{alignSelf:'flex-start', color:'red', fontSize:30}}>Q{index+1}</Text>
                                <Text style={{alignSelf:'flex-start', fontSize:20}}>{currentValue.question}</Text>
                            </View>
                            <View style={{
                                backgroundColor:'white',
                                padding:5
                            }}>
                                <Text style={{alignSelf:'flex-end', color:'green', fontSize:30}}>A{index+1}</Text>
                                <Text style={{textAlign:'right', fontSize:20}}>{currentValue.answer}</Text>
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

    const renderEmptyList = ()=>{
        console.log(qa.current[0].qa[0].question);
        
        return (
            <View>
                <Text style={{color:'white'}}>Preguntas y respuestas mas recientes</Text>
                <View>
                    <Text>a</Text>
                </View>
            </View>
        )
    }

  return (
    <View
        style={{alignItems:'center'}}
    >
        <TextInput
          placeholder="Buscador por nombre"
          onChangeText={setNameCard}
          value={nameCard}
          style={{color:'white'}}
          placeholderTextColor={'white'}
        />
        <FlatList
            data={renderData()}
            renderItem={renderItem}
            numColumns={1}
            ListEmptyComponent={renderEmptyList}
            showsVerticalScrollIndicator={false}
            style={{height:Dimensions.get('screen').height/1.415}}
        />
    </View>
  )
}

export default QuestionAnswer