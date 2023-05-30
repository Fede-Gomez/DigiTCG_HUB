import { StyleSheet } from 'react-native';


export const listCardsSelected = StyleSheet.create({
    container:{
        flexDirection:'column',
        margin:8
    },
    count:{
        alignSelf:'center',
        marginBottom:8,
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
})