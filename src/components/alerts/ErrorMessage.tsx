import { Alert } from 'react-native';

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
      

export default ErrorMessage