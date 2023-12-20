import React, {useRef, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { ModalContadorMemoria } from '..'
import { contadorMemoria } from '../../styles'
import BtnNumMemoria from './BtnNumMemoria'

const MemoryGauge = () => {
    const numPrevio = useRef(0)
    const jugPrevio = useRef(0)
    const msj = useRef('')
    const [activo, setActivo] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false)
    let historial = useRef([]);
    const style = contadorMemoria
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
      };

    const changeContador = (jugador: number, memoria:number)=>{
        msj.current = ''
        msj.current = `Turno del Jugador ${jugador}   `
        setActivo(`j${jugador}_${memoria}`)
        msj.current += `[ ${numPrevio.current} ] -> [ ${memoria} ]`
        numPrevio.current = memoria
        jugPrevio.current = jugador  
        msj.current != '' && historial.current.push(msj.current)
    }

    const resetGame = ()=>{
        historial.current = [];
        jugPrevio.current = 0
        numPrevio.current = 0
        setActivo('')
    }

  return (
    <View style={style.container}>
        <View style={{flexDirection:'row', marginVertical:15}}>
            <TouchableOpacity
                onPress={()=>resetGame()}
                style={{...style.btnHistorialReset, backgroundColor:'red'}}
            >
                <Text style={{...style.txtHistorialReset, color:'white'}}>Reiniciar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={toggleModal}
                style={{...style.btnHistorialReset, backgroundColor:'yellow'}}
            >
                <Text style={style.txtHistorialReset}>Historial</Text>
            </TouchableOpacity>
        </View>
        <View style={style.containerNumber}>
            <BtnNumMemoria changeContador={changeContador} activo={activo} jugador={1} memoriaJugador={'j1_10'} numMemoria={10} jugPrevio={jugPrevio.current} />
            <View style={style.lineaHorizontalPlayer1}/>
            <BtnNumMemoria changeContador={changeContador} activo={activo} jugador={1} memoriaJugador={'j1_9'} numMemoria={9} jugPrevio={jugPrevio.current} />
            <View style={style.lineaHorizontalPlayer1}/>
            <View>
                <BtnNumMemoria changeContador={changeContador} activo={activo} jugador={1} memoriaJugador={'j1_8'} numMemoria={8} jugPrevio={jugPrevio.current} />
                <View style={style.lineaVerticalDerPlayer1}/>
            </View>
        </View>
        <View style={style.containerNumber}>
            <View>
                <BtnNumMemoria changeContador={changeContador} activo={activo} jugador={1} memoriaJugador={'j1_5'} numMemoria={5} jugPrevio={jugPrevio.current} />
                <View style={style.lineaVerticalDerPlayer1}/>
            </View>
            <View style={style.lineaHorizontalPlayer1}/>
            <BtnNumMemoria changeContador={changeContador} activo={activo} jugador={1} memoriaJugador={'j1_6'} numMemoria={6} jugPrevio={jugPrevio.current} />
            <View style={style.lineaHorizontalPlayer1}/>
            <BtnNumMemoria changeContador={changeContador} activo={activo} jugador={1} memoriaJugador={'j1_7'} numMemoria={7} jugPrevio={jugPrevio.current} />
        </View>
        <View style={style.containerNumber}>
            <BtnNumMemoria changeContador={changeContador} activo={activo} jugador={1} memoriaJugador={'j1_4'} numMemoria={4} jugPrevio={jugPrevio.current} />
            <View style={style.lineaHorizontalPlayer1}/>
            <BtnNumMemoria changeContador={changeContador} activo={activo} jugador={1} memoriaJugador={'j1_3'} numMemoria={3} jugPrevio={jugPrevio.current} />
            <View style={style.lineaHorizontalPlayer1}/>
            <View>
                <BtnNumMemoria changeContador={changeContador} activo={activo} jugador={1} memoriaJugador={'j1_2'} numMemoria={2} jugPrevio={jugPrevio.current} />
                <View style={style.lineaVerticalDerPlayer1}/>
            </View>
        </View>
        <View style={style.containerNumber}>
            <View>
                <BtnNumMemoria changeContador={changeContador} activo={activo} jugador={2} memoriaJugador={'j2_1'} numMemoria={1} jugPrevio={jugPrevio.current} />
                <View style={style.lineaVerticalIzqPlayer2}/>
            </View>
            <View style={style.lineaHorizontalPlayer2}/>
            <BtnNumMemoria changeContador={changeContador} activo={activo} jugador={0} numMemoria={0} jugPrevio={jugPrevio.current} />            
            <View style={style.lineaHorizontalPlayer1}/>
            <BtnNumMemoria changeContador={changeContador} activo={activo} jugador={1} memoriaJugador={'j1_1'} numMemoria={1} jugPrevio={jugPrevio.current} />
        </View>
        <View style={style.containerNumber}>
            <BtnNumMemoria changeContador={changeContador} activo={activo} jugador={2} memoriaJugador={'j2_2'} numMemoria={2} jugPrevio={jugPrevio.current} />
            <View style={style.lineaHorizontalPlayer2}/>
            <BtnNumMemoria changeContador={changeContador} activo={activo} jugador={2} memoriaJugador={'j2_3'} numMemoria={3} jugPrevio={jugPrevio.current} />
            <View style={style.lineaHorizontalPlayer2}/>
            <View>
                <BtnNumMemoria changeContador={changeContador} activo={activo} jugador={2} memoriaJugador={'j2_4'} numMemoria={4} jugPrevio={jugPrevio.current} />
                <View style={style.lineaVerticalDerPlayer2}/>
            </View>
        </View>
        <View style={style.containerNumber}>
            <View>
                <BtnNumMemoria changeContador={changeContador} activo={activo} jugador={2} memoriaJugador={'j2_7'} numMemoria={7} jugPrevio={jugPrevio.current} />
                <View style={style.lineaVerticalIzqPlayer2}/>
            </View>
            <View style={style.lineaHorizontalPlayer2}/>
            <BtnNumMemoria changeContador={changeContador} activo={activo} jugador={2} memoriaJugador={'j2_6'} numMemoria={6} jugPrevio={jugPrevio.current} />
            <View style={style.lineaHorizontalPlayer2}/>
            <BtnNumMemoria changeContador={changeContador} activo={activo} jugador={2} memoriaJugador={'j2_5'} numMemoria={5} jugPrevio={jugPrevio.current} />                
        </View>
        <View style={style.containerNumber}>
            <BtnNumMemoria changeContador={changeContador} activo={activo} jugador={2} memoriaJugador={'j2_8'} numMemoria={8} jugPrevio={jugPrevio.current} />                
            <View style={style.lineaHorizontalPlayer2}/>
            <BtnNumMemoria changeContador={changeContador} activo={activo} jugador={2} memoriaJugador={'j2_9'} numMemoria={9} jugPrevio={jugPrevio.current} />                                
            <View style={style.lineaHorizontalPlayer2}/>
            <BtnNumMemoria changeContador={changeContador} activo={activo} jugador={2} memoriaJugador={'j2_10'} numMemoria={10} jugPrevio={jugPrevio.current} />
        </View>
        <ModalContadorMemoria isModalVisible={isModalVisible} toggleModal={toggleModal} historial={historial.current}/>
    </View>
  )
}

export default MemoryGauge