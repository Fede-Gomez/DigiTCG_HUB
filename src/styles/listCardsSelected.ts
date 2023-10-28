import { StyleSheet } from 'react-native';


export const listCardsSelected = StyleSheet.create({
    container:{
        flexDirection:'column',
        margin:8
    },
    count:{
        alignSelf:'center',
        marginBottom:8,
        color:'white',
        fontSize:25
    },
    buttonsAddRemove:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    headerList:{
        flex:1, 
        flexDirection:'row', 
        justifyContent: 'space-around',
        marginTop:16,
    },
    addCardsContainer:{
        flex:1,
        justifyContent: 'center',
    },
    addCards:{
        backgroundColor:'red',
        borderRadius:8,
        paddingVertical:20,
        marginHorizontal:90,
        color:'white',
        textAlign: 'center',
        fontSize:30,
        fontFamily:'digimon'
    },
})