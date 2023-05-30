import { StyleSheet } from 'react-native';


export const listCardsSearch = StyleSheet.create({
    container:{
        flexDirection:'column',
        margin:8
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
    search:{
        alignSelf:'center',
        color: 'black'
    },
    
})