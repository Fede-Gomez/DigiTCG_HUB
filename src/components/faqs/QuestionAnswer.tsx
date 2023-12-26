import React, {useState, useRef} from 'react'
import { Text, FlatList, View, TextInput, Dimensions, Button } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook';
import FastImage from 'react-native-fast-image';

const QuestionAnswer = () => {
    const qa = useRef(useAppSelector(state => state.faq.qa))
    const qaDateUpdate = useRef(useAppSelector(state => state.faq.dateQaUpdate))

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
                                <Text style={{alignSelf:'flex-start', color:'black', fontSize:20}}>{currentValue.question}</Text>
                            </View>
                            <View style={{
                                backgroundColor:'white',
                                padding:5
                            }}>
                                <Text style={{alignSelf:'flex-end', color:'green', fontSize:30}}>A{index+1}</Text>
                                <Text style={{textAlign:'right', color:'black', fontSize:20}}>{currentValue.answer}</Text>
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
            return qa.current?.filter((card) => 
                card.name?.toLowerCase().includes(nameCard.toLowerCase()) //revisa que concuerde el nombre de la/s carta/s con el campo de busqueda
                || card.num?.toLowerCase().includes(nameCard.toLowerCase()) //revisa que concuerde el booster o expansion donde salio con la/s carta/s con el campo de busqueda
                || card.qa?.find( e => e.question?.includes(nameCard.toLowerCase())) //revisa que concuerde la fecha de actualizacion donde salio con la/s carta/s con el campo de busqueda
            )
          }
        return[];
    }

    const renderEmptyList = ()=>{
        return (
            <View>
                <Text style={{color:'white', alignSelf:'center', fontSize:23, marginVertical:15}}>Preguntas y respuestas mas recientes</Text>
                <View>
                    {qaDateUpdate.current.map((e,index)=>{
                        return(
                            <Button
                                key={index}
                                title={ index == 0 ? e.date + '  NEW  '+ e.descripcion : e.date + '    '+ e.descripcion}
                                onPress={()=> setNameCard(e.date)}
                            />
                        ) 
                    })}
                </View>
            </View>
        )
    }

  return (
    <>
        <FlatList
            data={renderData()}
            renderItem={renderItem}
            numColumns={1}
            ListEmptyComponent={renderEmptyList}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={true}
            keyExtractor={item => item.num}
            contentContainerStyle={{alignSelf:'center'}}
        />
        <TextInput
          placeholder="Buscador por nombre, BT/EX/ST/RB/P o fecha"
          onChangeText={setNameCard}
          value={nameCard}
          style={{color:'white'}}
          placeholderTextColor={'white'}
        />
    </>
  )
}

export default QuestionAnswer