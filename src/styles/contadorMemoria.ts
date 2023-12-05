import { StyleSheet, Dimensions } from 'react-native';

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
const btnMemoriaBase = {
    backgroundColor:'white',
    padding:10,
}

export const contadorMemoria = StyleSheet.create({
    // btn y txt de reset e historial
    btnHistorialReset:{
        marginHorizontal:30,
        backgroundColor:'white',
    },
    txtHistorialReset:{
        color:'black',
        paddingVertical:5,
        paddingHorizontal:10
    },
    // contenedores
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
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


    // btn para sumar o restar memoria
    btnMemoriaBase: {
        ...btnMemoriaBase
    },

    // txt memoria del jugador
    txtMemoriaJugador:{
        alignSelf:'center', 
        marginHorizontal:40,
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