import React, {useState,useRef} from 'react'
import { Dimensions, Text, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook';
import { View, Button } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';


// Imaginar diagrama de flujo como los punteros, esto a modo de ejemplo pero la idea es que del ir moviendote y tomar las direcciones del los anteriores y los siguientes
// [anterior.anterior][Contenido][][][anterior][anterior.sigiuiente]

//                                    [anterior][Contenido][][][siguiente1][Siguiente2]

//                                                              [siguiente1][Contenido][][][siguiente1.siguiente][Siguiente2.siguiente]

const FlowChart = () => {
    const flow = useAppSelector(state => state.faq.flow)
    const {current} = useRef(flow.atkFlowChart) 
    const [currentFlow, setCurrentFlow] = useState('1')
    const [prevFlow, setPrevFlow] = useState('0')

  return (
    <View style={{top:'25%'}}>
        <View style={{flexDirection:'row', justifyContent:'space-evenly', marginVertical:20}}>
            {current[prevFlow]?.prev.map(e=>{
                return (
                    <Svg height="50" width="50" scale={50}
                    onPress={()=>{
                            setCurrentFlow(prevFlow),
                            setPrevFlow(current[prevFlow].prev)
                        }}>
                            <Polygon
                                points="25,0 50,25 40,25 40,50 10,50 10,25 0,25"
                                fill="blue"
                            />
                        </Svg>
                )
            })}
        </View>
        <Text style={{
            backgroundColor:'black',
            color:'white',
            alignSelf:'center',
            paddingHorizontal:40,
            textAlignVertical:'center',
            textAlign:'center',
            width: Dimensions.get('window').width * 0.5,
            height: Dimensions.get('window').width * 0.5,
            borderRadius:Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        }}>{current[currentFlow].descripcion}</Text>
        <View  style={{flexDirection:'row', justifyContent:'space-evenly', marginVertical:20}}>
        {current[currentFlow]?.next.map(e=>{
            return e != '0' ? (
                    <Svg height="50" width="50" scale={50} 
                    onPress={()=>{
                        setCurrentFlow(e), 
                        setPrevFlow(currentFlow)
                    }}
                    style={{transform:[{rotate:'180deg'}]}}
                    >
                        <Polygon
                            points="25,0 50,25 40,25 40,50 10,50 10,25 0,25"
                            fill="blue"
                        />
                    </Svg>
            ):(
                <Button
                    title={'Reiniciar'}
                    onPress={()=>{
                        setCurrentFlow('1'), 
                        setPrevFlow('0')
                    }}
                />
            )
        })}
        </View>
    </View>
  )
}

export default FlowChart