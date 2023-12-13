import React, {useRef, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { ModalContadorMemoria } from '..'
import { contadorMemoria } from '../../styles'

const MemoryGauge = () => {
    const contador = useRef(0)
    const numPrevio = useRef(0)
    const msj = useRef('')
    const [activo, setActivo] = useState(contador.current)
    const [isModalVisible, setIsModalVisible] = useState(false)
    let historial = useRef([]);
    const style = contadorMemoria
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
      };

    const changeContador = (jugador: number, accion:string, memoria:number)=>{
        numPrevio.current = contador.current;
        memoria == 1 ? contador.current++ : contador.current--
        setActivo(contador.current)
        msj.current = ''
        if(jugador == 1)
            msj.current = 'Jugador 1 '
        if(jugador == 2)
            msj.current = 'Jugador 2 '
        if(accion == 'resta')
            msj.current += 'resto memoria'
        if(accion == 'suma')
            msj.current += 'sumo memoria'
// Analiza si es turno del jugador 1 o del jugador 2, tambien analiza que si el contador esta en 0 de quien seria el turno (si del jugador 1 o del jugador 2)            
        if(Math.sign(contador.current) == 1 || (Math.sign(contador.current) == 0 && numPrevio == 1))
            msj.current += `\nTurno del Jugador 1     [${numPrevio}] --> [${contador.current}]`
        if(Math.sign(contador.current) == -1 || (Math.sign(contador.current) == 0 && numPrevio == -1))
            msj.current += `\nTurno del Jugador 2     [${numPrevio*-1}] --> [${contador.current*-1}]`
        historial.current.push(msj.current)
    }
    const resetGame = ()=>{
        historial.current = [];
        contador.current = 0
        setActivo(contador.current)
    }

    const memoria0 = ()=>{
        if(contador.current == 0){
           return numPrevio.current == 1 ? style.jugadorActivo1En0 : style.jugadorActivo2En0
        }
        if(contador.current >= 1)
            return style.jugadorActivo1En0
        
        if(contador.current <= -1)
            return style.jugadorActivo2En0
    }

  return (
    <View style={style.container}>
        <View style={{flexDirection:'row'}}>
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
        <View style={{flexDirection:'row', transform:[{rotate:'180deg'}], marginTop:15}}>
            <TouchableOpacity
                style={{
                    ...style.btnMemoriaBasePlayer1,
                    opacity: contador.current == 10 && 0.2
                }}
                onPress={()=>contador.current != 10 && changeContador(1, 'suma', 1)}
                disabled={contador.current == 10 && true }
            >
                <Text style={{color:'white'}}>Memoria +1</Text>
            </TouchableOpacity>
            <Text style={{...style.txtMemoriaJugador, backgroundColor:'black',padding:10, color:'skyblue'}}>Jugador 1:   {contador.current}</Text>
            <TouchableOpacity
                style={{
                    ...style.btnMemoriaBasePlayer1,
                    opacity: contador.current == -10 && 0.2,
                }}
                onPress={()=>contador.current != -10 && changeContador(1, 'resta', 0)}
                disabled={contador.current == -10 && true }
            >
                <Text style={{color:'white'}}>Memoria -1</Text>
            </TouchableOpacity>
        </View>
        <View style={style.containerNumber}>
            <Text style={activo == 10 ? style.jugadorActivo1 : style.jugador1}>10</Text>
            <View style={style.lineaHorizontalPlayer1}/>
            <Text style={activo == 9 ? style.jugadorActivo1 : style.jugador1}>9</Text>
            <View style={style.lineaHorizontalPlayer1}/>
            <Text style={activo == 8 ? style.jugadorActivo1 : style.jugador1}>8</Text>
        </View>
            <View style={style.lineaVerticalDerPlayer1}/>
        <View style={style.containerNumber}>
            <Text style={activo == 5 ? style.jugadorActivo1 : style.jugador1}>5</Text>
            <View style={style.lineaHorizontalPlayer1}/>
            <Text style={activo == 6 ? style.jugadorActivo1 : style.jugador1}>6</Text>
            <View style={style.lineaHorizontalPlayer1}/>
            <Text style={activo == 7 ? style.jugadorActivo1 : style.jugador1}>7</Text>
        </View>
            <View style={style.lineaVerticalIzq}/>
        <View style={style.containerNumber}>
            <Text style={activo == 4 ? style.jugadorActivo1 : style.jugador1}>4</Text>
            <View style={style.lineaHorizontalPlayer1}/>
            <Text style={activo == 3 ? style.jugadorActivo1 : style.jugador1}>3</Text>
            <View style={style.lineaHorizontalPlayer1}/>
            <Text style={activo == 2 ? style.jugadorActivo1 : style.jugador1}>2</Text>
        </View>
            <View style={style.lineaVerticalDerPlayer1}/>
        <View style={style.containerNumber}>
            <Text style={activo == -1 ? style.jugadorActivo2 : style.jugador2}>1</Text>
            <View style={style.lineaHorizontalPlayer2}/>
            <LinearGradient
                colors={['#000000', '#ffffff']}
                style={style.containerNumeroAmbosJugadores}
            >
                <Text style={{...memoria0(), transform:[{rotate:'-45deg'}]}}>0</Text>
            </LinearGradient>
            <View style={style.lineaHorizontalPlayer1}/>
            <Text style={activo == 1 ? style.jugadorActivo1 : style.jugador1}>1</Text>
        </View>
            <View style={style.lineaVerticalIzq}/>
        <View style={style.containerNumber}>
            <Text style={activo == -2 ? style.jugadorActivo2 : style.jugador2}>2</Text>
            <View style={style.lineaHorizontalPlayer2}/>
            <Text style={activo == -3 ? style.jugadorActivo2 : style.jugador2}>3</Text>
            <View style={style.lineaHorizontalPlayer2}/>
            <Text style={activo == -4 ? style.jugadorActivo2 : style.jugador2}>4</Text>
        </View>
        <View style={style.lineaVerticalDerPlayer2}/>
        <View style={style.containerNumber}>
            <Text style={activo == -7 ? style.jugadorActivo2 : style.jugador2}>7</Text>
            <View style={style.lineaHorizontalPlayer2}/>
            <Text style={activo == -6 ? style.jugadorActivo2 : style.jugador2}>6</Text>
            <View style={style.lineaHorizontalPlayer2}/>
            <Text style={activo == -5 ? style.jugadorActivo2 : style.jugador2}>5</Text>
        </View>
        <View style={style.lineaVerticalIzq}/>
        <View style={style.containerNumber}>
            <Text style={activo == -8 ? style.jugadorActivo2 : style.jugador2}>8</Text>
            <View style={style.lineaHorizontalPlayer2}/>
            <Text style={activo == -9 ? style.jugadorActivo2 : style.jugador2}>9</Text>
            <View style={style.lineaHorizontalPlayer2}/>
            <Text style={activo == -10 ? style.jugadorActivo2 : style.jugador2}>10</Text>
        </View>
        <View
            style={{flexDirection:'row'}}
        >
            <TouchableOpacity
                style={{
                    ...style.btnMemoriaBasePlayer2,
                    opacity: contador.current ==-10 && 0.2
                }}
                onPress={()=>contador.current != -10 && changeContador(2, 'suma', 0)}
                disabled={contador.current == -10 && true }
            >
                <Text style={{color:'black'}}>Memoria +1</Text>
            </TouchableOpacity>
            <Text style={{...style.txtMemoriaJugador, backgroundColor:'white',padding:10, color:'red'}}>Jugador 2:   {contador.current*-1}</Text>
            <TouchableOpacity
                style={{
                    ...style.btnMemoriaBasePlayer2,
                    opacity: contador.current == 10 && 0.2,
                }}
                onPress={()=>contador.current != 10 && changeContador(2, 'resta', 1)}
                disabled={contador.current == 10 && true }
            >
                <Text style={{color:'black'}}>Memoria -1</Text>
            </TouchableOpacity>
        </View>
        <ModalContadorMemoria isModalVisible={isModalVisible} toggleModal={toggleModal} historial={historial.current}/>
    </View>
  )
}

export default MemoryGauge