import { StyleSheet } from 'react-native';
import { switchColorBackground } from './utils/switchColorBackground';

const padding = 10

export const btnsHeader = (builderWishedSelling:string)=>{

    const textButtonBase = {
        fontWeight:'bold',
        fontSize:20,
    }
    
    let txtBtnModalDeckBuySell = {
        padding:padding, 
        width:100,
        fontWeight:'bold',
        fontSize:20, 
        textAlign:'center',
        backgroundColor:switchColorBackground(builderWishedSelling),
        color:'black'
    }
    
    let btnBase = {
        padding:padding, 
        alignItems:'center',     
        fontWeight:'bold',
        fontSize:20, 
        textAlign:'center',
    }
    
    let containerBase = {
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


    return StyleSheet.create({
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
        textBtnDeckBuySell:{
            ...txtBtnModalDeckBuySell,    
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
} 
