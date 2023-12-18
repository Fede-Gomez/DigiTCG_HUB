import React, {useRef, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { ModalContadorMemoria } from '..'
import { contadorMemoria } from '../../styles'

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
        if(jugPrevio.current == 1 || jugador == 1){
            msj.current = `Turno del Jugador 1   `
            setActivo(`j1_${memoria}`)
            msj.current += `[ ${numPrevio.current} ] -> [ ${memoria} ]`
        }
        if(jugPrevio.current == 2 || jugador == 2){
            msj.current = `Turno del Jugador 2   `
            setActivo(`j2_${memoria}`)
            msj.current += `[ ${numPrevio.current} ] -> [ ${memoria} ]`
        }
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

    const memoria0 = ()=>{
    if(activo == 'j1_0')
        return style.memoriaActivoJ1
    if(activo == 'j2_0')
        return style.memoriaActivoJ2
    if(jugPrevio.current == 1)
        return style.memoriaInactivoJ1
    if(jugPrevio.current == 2)
        return style.memoriaInactivoJ2
    return style.ambosJugadores
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
            <TouchableOpacity
            style={style.containerMemoriaJ1}
                onPress={()=>{
                    changeContador(1, 10)
                }}
            >
                <Text style={activo == 'j1_10' ? style.memoriaActivoJ1 : style.memoriaInactivoJ1}>10</Text>
            </TouchableOpacity>
            <View style={style.lineaHorizontalPlayer1}/>
            <TouchableOpacity
                style={style.containerMemoriaJ1}
                onPress={()=>{
                    changeContador(1, 9)
                }}
            >
                <Text style={activo == 'j1_9' ? style.memoriaActivoJ1 : style.memoriaInactivoJ1}>9</Text>
            </TouchableOpacity>
            <View style={style.lineaHorizontalPlayer1}/>
            <TouchableOpacity
                style={{...style.containerMemoriaJ1}}
                onPress={()=>{
                    changeContador(1, 8)
                }}
            >
                <Text style={activo == 'j1_8' ? style.memoriaActivoJ1 : style.memoriaInactivoJ1}>8</Text>
                <View style={style.lineaVerticalDerPlayer1}/>
            </TouchableOpacity>
        </View>
        <View style={style.containerNumber}>
            <TouchableOpacity
               style={style.containerMemoriaJ1}
               onPress={()=>{
                   changeContador(1, 5)
               }} 
            >
                <Text style={activo == 'j1_5' ? style.memoriaActivoJ1 : style.memoriaInactivoJ1}>5</Text>
                <View style={style.lineaVerticalDerPlayer1}/>
            </TouchableOpacity>
            <View style={style.lineaHorizontalPlayer1}/>
            <TouchableOpacity
               style={style.containerMemoriaJ1}
               onPress={()=>{
                   changeContador(1, 6)
               }} 
            >
            <Text style={activo == 'j1_6' ? style.memoriaActivoJ1 : style.memoriaInactivoJ1}>6</Text>
            </TouchableOpacity>
            <View style={style.lineaHorizontalPlayer1}/>
            <TouchableOpacity
               style={style.containerMemoriaJ1}
               onPress={()=>{
                   changeContador(1, 7)
               }} 
            >
            <Text style={activo == 'j1_7' ? style.memoriaActivoJ1 : style.memoriaInactivoJ1}>7</Text>
            </TouchableOpacity>
        </View>
        <View style={style.containerNumber}>
            <TouchableOpacity
               style={style.containerMemoriaJ1}
               onPress={()=>{
                   changeContador(1, 4)
               }} 
            >   
            <Text style={activo == 'j1_4' ? style.memoriaActivoJ1 : style.memoriaInactivoJ1}>4</Text>
            </TouchableOpacity>
            <View style={style.lineaHorizontalPlayer1}/>
            <TouchableOpacity
               style={style.containerMemoriaJ1}
               onPress={()=>{
                   changeContador(1, 3)
               }}
            >
                
            <Text style={activo == 'j1_3' ? style.memoriaActivoJ1 : style.memoriaInactivoJ1}>3</Text>
            </TouchableOpacity>
            <View style={style.lineaHorizontalPlayer1}/>
            <TouchableOpacity
               style={style.containerMemoriaJ1}
               onPress={()=>{
                   changeContador(1, 2)
               }} 
            >
                
            <Text style={activo == 'j1_2' ? style.memoriaActivoJ1 : style.memoriaInactivoJ1}>2</Text>
            <View style={style.lineaVerticalDerPlayer1}/>
            </TouchableOpacity>
        </View>
        <View style={style.containerNumber}>
        <TouchableOpacity
               style={style.containerMemoriaJ2}
               onPress={()=>{
                   changeContador(2, 1)
               }} 
            >
                <Text style={activo == 'j2_1' ? style.memoriaActivoJ2 : style.memoriaInactivoJ2}>1</Text>
                <View style={style.lineaVerticalIzqPlayer2}/>
            </TouchableOpacity>
            <View style={style.lineaHorizontalPlayer2}/>
            <LinearGradient
                colors={['#000000', '#ffffff']}
                style={{...style.containerMemoria0, transform:[{rotate:'45deg'}]}}
            >
            <TouchableOpacity
               onPress={()=>{
                   changeContador(0, 0)
               }} 
            >
                <Text style={{...memoria0(), transform:[{rotate:'-45deg'}]}} >0</Text>
            </TouchableOpacity>
            </LinearGradient>
            <View style={style.lineaHorizontalPlayer1}/>
            <TouchableOpacity
               style={style.containerMemoriaJ1}
               onPress={()=>{
                   changeContador(1, 1)
               }} 
            >
                <Text style={activo == 'j1_1' ? style.memoriaActivoJ1 : style.memoriaInactivoJ1}>1</Text>
            </TouchableOpacity>
        </View>
        <View style={style.containerNumber}>
        <TouchableOpacity
               style={style.containerMemoriaJ2}
               onPress={()=>{
                   changeContador(2, 2)
               }} 
            >
            <Text style={activo == 'j2_2' ? style.memoriaActivoJ2 : style.memoriaInactivoJ2}>2</Text>
        </TouchableOpacity>
            <View style={style.lineaHorizontalPlayer2}/>
            <TouchableOpacity
               style={style.containerMemoriaJ2}
               onPress={()=>{
                   changeContador(2, 3)
               }} 
            >
            <Text style={activo == 'j2_3' ? style.memoriaActivoJ2 : style.memoriaInactivoJ2}>3</Text>
            </TouchableOpacity>
            <View style={style.lineaHorizontalPlayer2}/>
            <TouchableOpacity
               style={style.containerMemoriaJ2}
               onPress={()=>{
                   changeContador(2, 4)
               }} 
            >
            <Text style={activo == 'j2_4' ? style.memoriaActivoJ2 : style.memoriaInactivoJ2}>4</Text>
        <View style={style.lineaVerticalDerPlayer2}/>
            </TouchableOpacity>
        </View>
        <View style={style.containerNumber}>
        <TouchableOpacity
               style={style.containerMemoriaJ2}
               onPress={()=>{
                   changeContador(2, 7)
               }} 
            >

            <Text style={activo == 'j2_7' ? style.memoriaActivoJ2 : style.memoriaInactivoJ2}>7</Text>
            <View style={style.lineaVerticalIzqPlayer2}/>
            </TouchableOpacity>
            <View style={style.lineaHorizontalPlayer2}/>
            <TouchableOpacity
               style={style.containerMemoriaJ2}
               onPress={()=>{
                   changeContador(2, 6)
               }} 
            >
                
            <Text style={activo == 'j2_6' ? style.memoriaActivoJ2 : style.memoriaInactivoJ2}>6</Text>
            </TouchableOpacity>
            <View style={style.lineaHorizontalPlayer2}/>
            <TouchableOpacity
               style={style.containerMemoriaJ2}
               onPress={()=>{
                   changeContador(2, 5)
               }} 
            >
                
            <Text style={activo == 'j2_5' ? style.memoriaActivoJ2 : style.memoriaInactivoJ2}>5</Text>
            </TouchableOpacity>
        </View>
        <View style={style.containerNumber}>
            <TouchableOpacity
               style={style.containerMemoriaJ2}
               onPress={()=>{
                   changeContador(2, 8)
               }} 
            >
            <Text style={activo == 'j2_8' ? style.memoriaActivoJ2 : style.memoriaInactivoJ2}>8</Text>
            </TouchableOpacity>
                
            <View style={style.lineaHorizontalPlayer2}/>
            <TouchableOpacity
               style={style.containerMemoriaJ2}
               onPress={()=>{
                   changeContador(2, 9)
               }} 
            >
            <Text style={activo == 'j2_9' ? style.memoriaActivoJ2 : style.memoriaInactivoJ2}>9</Text>
            </TouchableOpacity>
                
            <View style={style.lineaHorizontalPlayer2}/>
            <TouchableOpacity
               style={style.containerMemoriaJ2}
               onPress={()=>{
                   changeContador(2, 10)
               }} 
            >
            <Text style={activo == 'j2_10' ? style.memoriaActivoJ2 : style.memoriaInactivoJ2}>10</Text>
            </TouchableOpacity>
                
        </View>
        <ModalContadorMemoria isModalVisible={isModalVisible} toggleModal={toggleModal} historial={historial.current}/>
    </View>
  )
}

export default MemoryGauge