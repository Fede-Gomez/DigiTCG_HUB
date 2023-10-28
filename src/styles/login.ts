import { StyleSheet } from 'react-native';


export const login = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    text:{
        textAlign:'center',
        fontSize:20,
        marginVertical:10,
        fontFamily: 'DigimonBasic',
        color:'black'
    },
    inputText:{
        backgroundColor:'white',
        borderRadius:30,
        width:'80%',
        alignSelf:'center',
        opacity:0.5,
        color:'black'
    },
    logCreteAccountContainer:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-around'
    }

})