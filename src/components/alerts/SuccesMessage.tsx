import {Alert} from 'react-native';

const SuccesMessage = (message: string) => {
  return Alert.alert(
    'Exito',
    message,
    [
        {
            text: 'Ok',
        },
    ]
  );
}

export default SuccesMessage