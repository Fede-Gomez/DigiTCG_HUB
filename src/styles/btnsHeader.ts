import { StyleSheet } from 'react-native';

const padding = 10

const textButtonBase = {
    fontWeight:'bold',
    fontSize:20,
}

let btnsDesplegablesBase = {
    padding:padding, 
    width:130,
    fontWeight:'bold',
    fontSize:20, 
    textAlign:'center',
}

let btnBase = {
    padding:padding, 
    alignItems:'center',     
    fontWeight:'bold',
    fontSize:20, 
    textAlign:'center',
}

let containerBase = {
    flex: 1, 
    flexDirection: 'row', 
    marginVertical:8,
}

let containerAlone ={
    ...containerBase,
    alignSelf: 'center'
}

let containerWithButtons ={
    ...containerBase,
    justifyContent: 'space-around', 
}

export const btnsHeader = StyleSheet.create({
    containerAlone:{ 
        ...containerAlone
    },
    containerWithButtons:{ 
        ...containerWithButtons
    },

 
// botones de volver y limpiar
    buttonBackClear:{
        ...btnBase,
        backgroundColor:'black',
    },
    textButtonBackClear:{
        ...textButtonBase,
        alignSelf:'center',
        color:'white',
    },
    
    
    // texto de los botones desplegables
    textButtonDesplegable1:{
    ...btnsDesplegablesBase,
    },
    textButtonDesplegable2:{
        ...btnsDesplegablesBase,
        position:'absolute',
        width:110,
        alignSelf:'center',
    },
    textButtonDesplegable3:{
        ...btnsDesplegablesBase,
        position:'absolute', 
        top:46,
        width:110,
        alignSelf:'center',
    },
    // animacion de botones desplegables
    viewAnimated:{
        backgroundColor: 'blue',
    },


    // pantalla searchCard
    textButtonSearch:{
        ...textButtonBase,
        color:'black',
        paddingTop:5,
    },
    inputSearch:{
        backgroundColor:'black', 
        color:'white', 
        borderRadius:30, 
        paddingHorizontal:10, 
        textAlign:'center'
    },
})