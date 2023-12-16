import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,  } from 'firebase/auth'
import { app } from '../firebase/connect'
import { useAppDispatch } from './useReducerHook';
import { useNavigation } from '@react-navigation/native';
import { TypeNavigation } from '../constants/typesNavigation'
import { setUser } from '../reducers/userReducer';
import { getUserFromDataBase, saveUserDataBase } from '../firebase/dataBase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ErrorMessage } from '../components';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const provider = new GoogleAuthProvider();
export const useAccount = () => {
    const auth = getAuth(app);
    const navigation = useNavigation()
    const dispatch = useAppDispatch()
    const regexEmail = /.*@.*/;
    const regexPass = /^.{6,}$/;
    const createAccount = async (name, email, password)=>{
        
        if(!regexEmail.test(email)){
            ErrorMessage('Email invalido')
            return
        }
        if(!regexPass.test(password)){
            ErrorMessage('La contraseña debe tener al menos 6 caracteres')
            return
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                saveDataBaseUser(userCredential.user.uid, email, password, name)
            })
    }

    const signInGoogle = async () => {
        try {
           const {user} = await GoogleSignin.signIn();
           const {email, name, id} = user
           signInWithEmailAndPassword(auth, email, id)
           .then((userCredential)=>{
               loginUser(userCredential.user.uid)
           }).catch(error =>{
                createAccount(name, email, id)
           })
        } catch (error) {
            console.log(error);
            
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            console.log(error);
            
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      };

    const signIn = (email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                loginUser(userCredential.user.uid)
            }).catch(error =>{
                 ErrorMessage('Usuario o Contraseña incorrectos')
            })
    }

    const saveDataBaseUser = async (idUser, email, pass, name)=>{
        await saveUserDataBase(idUser, email, pass, name);
        loginUser(idUser);
    }

    const loginUser = async (idUser)=>{
        let user = await getUserFromDataBase(idUser).catch( ()=> ErrorMessage('Error al ingresar, intente nuevamente') )
        if (user !== null) {
            dispatch(setUser(user?.data()))
            navigation.navigate(TypeNavigation.game.home);
            await saveUserStorageDevice(idUser)
        }else{
            navigation.navigate(TypeNavigation.account.login);
        }
    }


    const getUserStorageDevice = async () => {

        try {
            const value = await AsyncStorage.getItem('idUser');
        if (value !== null) {
            loginUser(value);
        }
        } catch (error) {
        }
    };

    const saveUserStorageDevice = async (idUser:string)=>{
        try {
            await AsyncStorage.setItem('idUser',idUser);
          } catch (error) {
          }
    }

    return{
        createAccount,
        signIn,
        loginUser, 
        saveDataBaseUser,
        getUserStorageDevice,
        signInGoogle,
    }
}
