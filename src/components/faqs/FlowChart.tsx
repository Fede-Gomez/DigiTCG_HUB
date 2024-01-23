import React, {useState,useRef} from 'react'
import { Animated, Dimensions, Text } from 'react-native';
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
    const opacity = useRef(new Animated.Value(0)).current;

    const [move, setMove] = useState(true)
    const [btnHabilitado, setBtnHabilitado] = useState(false)

    const moveFlowChart = ()=>{
        fade()
        setMove(!move)
        setBtnHabilitado(true)
        setTimeout(() => {
            setBtnHabilitado(false)
        }, 500);
    }


    

    const fade = ()=>{
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration:1,
                useNativeDriver:true
            }
        ).start(()=>{
            Animated.timing(
                opacity,
                {
                    toValue:1,
                    duration:500,
                    useNativeDriver:true
                }
            ).start()
        })
    }

  return (
    <View style={{top:'25%'}}>
        {currentFlow=='1' && <Text style={{alignSelf:'center', fontSize:20, color:'white', backgroundColor:'black', padding:15}}>Inicio</Text>
        }
        <Animated.View style={{flexDirection:'row', justifyContent:'space-evenly', marginVertical:20}}>
            {current[prevFlow]?.prev.map(e=>{
                return (
                    <Svg height="50" width="50" scale={50}
                    onPress={()=>{
                            moveFlowChart(),
                            setCurrentFlow(prevFlow),
                            setPrevFlow(current[prevFlow].prev)
                        }}
                    disabled={btnHabilitado}
                    >
                        <Polygon
                            points="25,0 50,25 40,25 40,50 10,50 10,25 0,25"
                            fill="blue"
                        />
                    </Svg>
                )
            })}
        </Animated.View>
        <Animated.Text style={{
            backgroundColor:'black',
            color:'white',
            alignSelf:'center',
            paddingHorizontal:40,
            textAlignVertical:'center',
            textAlign:'center',
            fontSize:15,
            width: Dimensions.get('window').width * 0.5,
            height: Dimensions.get('window').width * 0.5,
            borderRadius:Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
            opacity:opacity
        }}>{current[currentFlow].descripcion}</Animated.Text>
        <View  style={{flexDirection:'row', justifyContent:'space-evenly', marginVertical:20}}>
        {current[currentFlow]?.next.map(e=>{
            return e != '0' ? (
                    <Svg height="50" width="50" scale={50} 
                    onPress={()=>{
                        moveFlowChart(),
                        setCurrentFlow(e), 
                        setPrevFlow(currentFlow)
                    }}
                    disabled={btnHabilitado}
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