import React, {useRef, useState} from 'react'
import { Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const CountMemoryScreen = () => {
    const contador = useRef(0)
    const [activo, setActivo] = useState(contador.current)
    let msj = '';
    let historial = useRef([]);

    const changeContador = (memoria:number)=>{
        const numPrevio = contador.current;
        memoria == 1 ? contador.current++ : contador.current--
        setActivo(contador.current)
        msj = ''
        Math.sign(numPrevio) == 1
            ? msj += `Jugador 1 Activo     [${numPrevio}] --> [${contador.current}]`
            : msj += `Jugador 2 Activo     [${numPrevio*-1}] --> [${contador.current*-1}]`
        historial.current.push(msj)
    }
    const resetGame = ()=>{
        historial.current = [];
        contador.current = 0
        setActivo(contador.current)
    }
    const verHistorial = ()=>{
        console.log(historial.current)
    }

  return (
    <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }}>
        <View  style={{flexDirection:'row'}}>
            <TouchableOpacity
                onPress={()=>resetGame()}
            >
                <Text>Reiniciar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>verHistorial(historial)}
            >
                <Text>Historial</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', transform:[{rotate:'180deg'}]}}>
            <TouchableOpacity
                style={{
                    backgroundColor:'white',
                    padding:10,
                    marginRight:150,
                    opacity: contador.current ==10 && 0.2

                }}
                onPress={()=>contador.current != 10 && changeContador(1)}
                disabled={contador.current == 10 && true }
            >
                <Text style={{color:'black'}}>Memoria +1</Text>
            </TouchableOpacity>
            <Text style={{alignSelf:'center', color:'blue'}}>Jugador 1:   {contador.current}</Text>
        </View>
        <View style={style.containerNumber}>
            <Text style={activo == 10 ? style.jugadorActivo1 : style.jugador1}>10</Text>
            <View style={style.lineaHorizontal}/>
            <Text style={activo == 9 ? style.jugadorActivo1 : style.jugador1}>9</Text>
            <View style={style.lineaHorizontal}/>
            <Text style={activo == 8 ? style.jugadorActivo1 : style.jugador1}>8</Text>
        </View>
            <View style={style.lineaVerticalDer}/>
        <View style={style.containerNumber}>
            <Text style={activo == 5 ? style.jugadorActivo1 : style.jugador1}>5</Text>
            <View style={style.lineaHorizontal}/>
            <Text style={activo == 6 ? style.jugadorActivo1 : style.jugador1}>6</Text>
            <View style={style.lineaHorizontal}/>
            <Text style={activo == 7 ? style.jugadorActivo1 : style.jugador1}>7</Text>
        </View>
            <View style={style.lineaVerticalIzq}/>
        <View style={style.containerNumber}>
            <Text style={activo == 4 ? style.jugadorActivo1 : style.jugador1}>4</Text>
            <View style={style.lineaHorizontal}/>
            <Text style={activo == 3 ? style.jugadorActivo1 : style.jugador1}>3</Text>
            <View style={style.lineaHorizontal}/>
            <Text style={activo == 2 ? style.jugadorActivo1 : style.jugador1}>2</Text>
        </View>
            <View style={style.lineaVerticalDer}/>
        <View style={style.containerNumber}>
            <Text style={activo == -1 ? style.jugadorActivo2 : style.jugador2}>1</Text>
            <View style={style.lineaHorizontal}/>
            <LinearGradient
                colors={['#000000', '#ffffff']}
                style={style.containerNumeroAmbosJugadores}
            >
                <Text style={{...style.ambosJugadores, transform:[{rotate:'-45deg'}], color:'gold'}}>0</Text>
            </LinearGradient>
            <View style={style.lineaHorizontal}/>
            <Text style={activo == 1 ? style.jugadorActivo1 : style.jugador1}>1</Text>
        </View>
            <View style={style.lineaVerticalIzq}/>
        <View style={style.containerNumber}>
            <Text style={activo == -2 ? style.jugadorActivo2 : style.jugador2}>2</Text>
            <View style={style.lineaHorizontal}/>
            <Text style={activo == -3 ? style.jugadorActivo2 : style.jugador2}>3</Text>
            <View style={style.lineaHorizontal}/>
            <Text style={activo == -4 ? style.jugadorActivo2 : style.jugador2}>4</Text>
        </View>
        <View style={style.lineaVerticalDer}/>
        <View style={style.containerNumber}>
            <Text style={activo == -5 ? style.jugadorActivo2 : style.jugador2}>5</Text>
            <View style={style.lineaHorizontal}/>
            <Text style={activo == -6 ? style.jugadorActivo2 : style.jugador2}>6</Text>
            <View style={style.lineaHorizontal}/>
            <Text style={activo == -7 ? style.jugadorActivo2 : style.jugador2}>7</Text>
        </View>
        <View style={style.lineaVerticalIzq}/>
        <View style={style.containerNumber}>
            <Text style={activo == -8 ? style.jugadorActivo2 : style.jugador2}>8</Text>
            <View style={style.lineaHorizontal}/>
            <Text style={activo == -9 ? style.jugadorActivo2 : style.jugador2}>9</Text>
            <View style={style.lineaHorizontal}/>
            <Text style={activo == -10 ? style.jugadorActivo2 : style.jugador2}>10</Text>
        </View>
        <View
            style={{flexDirection:'row'}}
        >
            <TouchableOpacity
                style={{
                    backgroundColor:'white',
                    padding:10,
                    marginRight:150,
                    opacity: contador.current ==-10 && 0.2
                }}
                onPress={()=>contador.current != -10 && changeContador(0)}
                disabled={contador.current == -10 && true }
            >
                <Text style={{color:'black'}}>Memoria +1</Text>
            </TouchableOpacity>
            <Text style={{alignSelf:'center', color:'red'}}>Jugador 2:   {contador.current*-1}</Text>
        </View>
    </View>
  )
}


const estiloNumBase = {
    borderRadius:80,
    width:50,
    height:50,
    textAlign:'center',
    fontSize:35,
}
const lineaBase = {
    backgroundColor:'black',
    height:5,
    paddingHorizontal:20,
}


const style = StyleSheet.create({
    // contenedores
    containerNumber: {
        flexDirection:'row', 
        marginVertical:15, 
        alignItems:'center'
    },
    containerNumeroAmbosJugadores:{
        ...estiloNumBase,
        transform:[{rotate:'45deg'}]
    },


    // circulos de memoria
    jugador1:{
        ...estiloNumBase,
        backgroundColor:'black',
        color:'white',
        transform:[{rotate:'180deg'}]
    },
    jugador2:{
        ...estiloNumBase,
        backgroundColor:'white',
        color:'black',
    },
    ambosJugadores:{
        ...estiloNumBase,
    },
    jugadorActivo:{
        ...estiloNumBase,
    },
    jugadorActivo1:{
        ...estiloNumBase,
        color:'blue',
        transform:[{rotate:'180deg'}]
    },
    jugadorActivo2:{
        ...estiloNumBase,
        color:'red',
    },


    // lineas que unen los circulos
    lineaHorizontal:{
        ...lineaBase
    },
    lineaVerticalDer:{
        ...lineaBase,
        transform:[{rotate:'90deg'}],
        marginLeft: Dimensions.get('window').width / 2.3
    },
    lineaVerticalIzq:{
        ...lineaBase,
        transform:[{rotate:'90deg'}],
        marginRight: Dimensions.get('window').width / 2.3
    },
})

export default CountMemoryScreen