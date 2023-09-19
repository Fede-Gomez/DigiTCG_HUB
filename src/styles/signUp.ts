import { StyleSheet } from 'react-native';


export const signUp = StyleSheet.create({
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
        backgroundColor:'red',
        borderRadius:30,
        width:'80%',
        alignSelf:'center'
    },
    logCreteAccountResetContainer:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-around'
    }

})