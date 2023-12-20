import React from 'react'
import { Image, PixelRatio, Text, TouchableOpacity } from 'react-native'
import { contadorMemoria } from '../../styles'
import { iconoContadorMemoria } from '../../assets/icons'
import LinearGradient from 'react-native-linear-gradient';

interface props {
    changeContador: (a:number,b:number)=>void;
    activo: string;
    jugador: number;
    memoriaJugador?: string; 
    numMemoria: number;
    jugPrevio: number;
}
const sizeHeightScreen = PixelRatio.get()*160

function heightWidth() {
    switch (sizeHeightScreen) {
        case 440:
            return 75
        case 420:
            return 95
        case 400:
            return 95
    }
}

function marginTop() {
    switch (sizeHeightScreen) {
        case 440:
            return -12
        case 420:
            return -16
        case 400:
            return -16
    }
}

function marginLeft() {
    switch (sizeHeightScreen) {
        case 440:
            return 0
        case 420:
            return 1
        case 400:
            return 1
    }
}

const BtnNumMemoria = ({changeContador, activo, jugador, memoriaJugador, numMemoria, jugPrevio}:props) => {
    const style = contadorMemoria
    const memoria0 = ()=>{
        if(jugPrevio == 1)
            return style.memoriaInactivoJ1
        if(jugPrevio == 2)
            return style.memoriaInactivoJ2
        return style.ambosJugadores
    }

  return numMemoria == 0
  ? <>
        <LinearGradient
            colors={['#000000', '#ffffff']}
            style={{...style.containerMemoria0, transform:[{rotate:'45deg'}]}}
        >
        <TouchableOpacity
            onPress={()=>changeContador(0,0)} 
        >
            {
               activo == 'j0_0'
               ? <Image
                   source={iconoContadorMemoria}
                   style={{width:heightWidth(), height:heightWidth(), alignSelf:'center', marginTop:marginTop(), marginLeft:marginLeft(), transform:[{rotate:'-45deg'}]}}
               />
               : <Text style={{...memoria0(), transform:[{rotate:'-45deg'}]}} >{numMemoria}</Text> 
            }
            
        </TouchableOpacity>
        </LinearGradient>
    </>
  : <>
    <TouchableOpacity
        style={ jugador == 1 ? style.containerMemoriaJ1 : style.containerMemoriaJ2}
        onPress={()=>changeContador(jugador, numMemoria)}
    >
        {
            activo == memoriaJugador
            ? <Image
                source={iconoContadorMemoria}
                style={{width:heightWidth(), height:heightWidth(), alignSelf:'center', marginTop:marginTop(), marginLeft:marginLeft(),}}
            />
            : <Text style={ jugador == 1 ? style.memoriaInactivoJ1 : style.memoriaInactivoJ2}>{numMemoria}</Text> 
        }
    </TouchableOpacity>
  </>
}

export default BtnNumMemoria