import { StyleSheet } from 'react-native';

const estiloNumBase = {
    textAlign:'center',
    fontSize:45,
}
const containerMemoriaBase = {
    borderRadius:80,
    width:65,
    height:65,
}
const lineaBaseHorizontal = {
    height:5,
    paddingHorizontal:20,
}
const lineaBaseVertical = {
    paddingVertical:20,
    marginTop:4,
    width:5,
    alignSelf:'center',
}

export const contadorMemoria = StyleSheet.create({
    // btn y txt de reset e historial
    btnHistorialReset:{
        marginHorizontal:25,
        backgroundColor:'white',
    },
    txtHistorialReset:{
        color:'black',
        paddingVertical:5,
        paddingHorizontal:10,
        fontSize:25
    },



    // contenedores
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    containerMemoria0:{
        ...containerMemoriaBase,
    },
    containerMemoriaJ1:{
        ...containerMemoriaBase,
        backgroundColor:'black',
    },
    containerMemoriaJ2:{
        ...containerMemoriaBase,
        backgroundColor:'white',
    },
    containerNumber: {
        flexDirection:'row', 
        marginVertical:15, 
        alignItems:'center',
    },



    // circulos de memoria
    ambosJugadores:{
        ...estiloNumBase,
        transform:[{rotate:'-45deg'}],
        color:'gold'
    },
    memoriaActivoJ1:{
        ...estiloNumBase,
        color:'skyblue',
        transform:[{rotate:'180deg'}]
    },
    memoriaInactivoJ1:{
        ...estiloNumBase,
        color:'white',
        zIndex:20,
        transform:[{rotate:'180deg'}]
    },
    memoriaActivoJ2:{
        ...estiloNumBase,
        color:'red',
    },
    memoriaInactivoJ2:{
        ...estiloNumBase,
        color:'black'
    },


    // lineas que unen los circulos
    lineaHorizontalPlayer1:{
        ...lineaBaseHorizontal,
        backgroundColor:'white'
    },
    lineaVerticalDerPlayer1:{
        ...lineaBaseVertical,
        backgroundColor:'white',
    },
    lineaVerticalIzqPlayer1:{
        ...lineaBaseVertical,
        backgroundColor:'white',
    },

    lineaHorizontalPlayer2:{
        ...lineaBaseHorizontal,
        backgroundColor:'black'
    },
    lineaVerticalDerPlayer2:{
        ...lineaBaseVertical,
        backgroundColor:'black',
    },
    lineaVerticalIzqPlayer2:{
        ...lineaBaseVertical,
        backgroundColor:'black',
    },
})