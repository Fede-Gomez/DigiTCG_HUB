import { StyleSheet, Dimensions } from 'react-native';
const backgroundModal = "#1D201F";
export const Digimon = StyleSheet.create({
    cardContainer:{
        marginVertical:7,
    },
    imageCard:{
        height: 175, 
        width: Dimensions.get('window').width / 3.4,
    },
    imageCardModal:{
        alignSelf:'center',
        height: 300, 
        width: '55%',
    },
    containerImgStats:{
        flexDirection:'row',
    },
    containerStats:{
        width:'45.3%',
    },
    containerEffectSource:{
        marginBottom:15,
    },
    textCard:{
        color: '#ffffff',
        fontSize: 15,
        paddingVertical:1.5,
        borderColor:'#ffffff',
        borderWidth:1,
        paddingStart:3.5
    },
    containerTextEffect:{
        borderColor:'#ffffff',
        borderWidth:1,
    },
    textCardEffect:{
        color: '#ffffff',
        fontSize: 15,
        paddingVertical:1.5,
        paddingStart:3.5
    },
    modalContainerCard:{
        backgroundColor: backgroundModal
    },
    buttonsModalAddRemove:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginVertical:10,
    }
})