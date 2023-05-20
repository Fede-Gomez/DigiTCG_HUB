import { StyleSheet, Dimensions } from 'react-native';

export const Digimon = StyleSheet.create({
    cardContainer:{
        marginVertical:7,
    },
    imageCard:{
        height: 190, 
        width: Dimensions.get('window').width / 3
    },
    imageCardModal:{
        height: 300, 
        width: '55%'
    },
    containerImgStats:{
        flexDirection:'row'
    },
    containerStats:{
        backgroundColor:'red',
        paddingLeft:10
    },
    containerEffectSource:{
        paddingLeft:10,
    },
    textCard:{
        color: '#ffffff',
        fontSize: 16,
    },
    modalContainer:{
        backgroundColor:'blue',
    },
    buttonsModalAddRemove:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginVertical:10,
    }
})