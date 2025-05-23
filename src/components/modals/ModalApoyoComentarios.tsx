import React from 'react'
import { Button, Linking, Text, TouchableOpacity, View } from 'react-native';
import Modal from "react-native-modal";


const ModalApoyoComentarios = ({isModalVisible, toggleModal}) => {
    const urlCafecito = 'https://cafecito.app/zanarkand';
    const email = 'fedekingdom@gmail.com';
    const subject = 'Consulta sobre digiTCG HUB';
    const body = 'Hola, tengo una pregunta...';
    const urlTerminosYCondiciones = 'https://www.privacypolicies.com/live/e199edf7-c57c-43b6-8fc2-89340f5714be';
    
    const abrirEmail = () => {
      const url = `mailto:${email}?subject=${subject}&body=${body}`;
      Linking.openURL(url)
        .catch((err) => console.error('Error al abrir el correo', err));
    };
    const abrirCafecito = () => {
        Linking.openURL(urlCafecito)
          .catch((err) => console.error('Error al abrir el enlace', err));
      };
    
    const abrirTerminosYCondiciones = () => {
      Linking.openURL(urlTerminosYCondiciones)
        .catch((err) => console.error('Error al abrir el enlace', err));
    };

  return (
    <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1, justifyContent:'center' }}>
          <Text style={{color:'white', fontSize:30}}>¿Te gusta la aplicación? </Text>
          <Text style={{color:'white', fontSize:30}}>Dame una mano para que siga creciendo. ¡Hacé una donación y bancanos en el desarrollo!</Text> 
          <Button
            title='Apoya el proyecto'
            onPress={abrirCafecito}
            color={'green'}
          />
          <Text style={{color:'white', fontSize:30, marginTop:100}}>Si tenés problemas con la app o faltan cartas, contactame!</Text>
          <Button
            title='Contactame'
            onPress={abrirEmail}
            color={'red'}
          />
        </View>
        <Text style={{textAlign:'center', color:'white', marginBottom:15, fontSize:13}}>Esta aplicación NO es oficial. No está producida, respaldada, apoyada o afiliada a BANDAI</Text>
        <TouchableOpacity
          onPress={abrirTerminosYCondiciones}
        >
          <Text style={{textAlign:'center', color:'white', marginBottom:15, fontSize:13}}>Terminos y condiciones</Text>
        </TouchableOpacity>
          <Button title="Salir" onPress={toggleModal} />
      </Modal>
  );
}

export default ModalApoyoComentarios