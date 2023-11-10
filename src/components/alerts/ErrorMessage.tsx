import { useEffect } from 'react';
import { Alert } from 'react-native';
import Sound from 'react-native-sound';

const ErrorMessage = (message: string) => {
        return Alert.alert(
          'Error',
          message,
          [
              {
                  text: 'Ok',
              },
          ]
        );
      }
    
      
      
const ErrorSound = ()=>{
  let sound
  console.log('me aprete');
  
  useEffect(() => {
    sound = new Sound(require('../../assets/sounds/error.wav'), Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Error al cargar el sonido', error);
      }
    })
  }, [])
  sound.play()
}
export {
  ErrorMessage,
  ErrorSound,
}