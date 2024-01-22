import { StyleSheet } from "react-native"
import { switchColorBackground } from "../utils/switchColorBackground"

const modalDeckBuySell = (builderWishedSelling:string) => {
  return StyleSheet.create({
    selected:{
        backgroundColor:switchColorBackground(builderWishedSelling),
        alignSelf:'center',
        width:150,
        height:150,
        borderRadius:100,
        justifyContent:'center',
    },
    txtSelected:{
        fontSize:35, 
        alignSelf:'center',
        color:'black'
    },
    optionsContainer:{
        flexDirection:'row', 
        alignSelf:'center',
    },
    otherOptions:{
      backgroundColor:switchColorBackground(builderWishedSelling),
      marginHorizontal:50,
      marginVertical:50,
      borderRadius:100,
      height:80,
      width:80,
      justifyContent:'center',
    },
    otherOptionsText:{
      fontSize:20, 
      alignSelf:'center',
      color:'black'
    }
  })
}

export default modalDeckBuySell