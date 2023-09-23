import { StyleSheet, Dimensions } from 'react-native';

export const folder = StyleSheet.create({

    container:{
        flexDirection:'row',
        justifyContent:'space-evenly'
        // alignSelf:'center',
        // margin:8,
    },
    containerImg:{
        // padding:8,
        width: Dimensions.get('window').width / 3,
    }
})