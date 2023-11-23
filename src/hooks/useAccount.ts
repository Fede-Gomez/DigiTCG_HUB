import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase/connect'
import { useAppDispatch } from './useReducerHook';
import { useNavigation } from '@react-navigation/native';
import { TypeNavigation } from '../constants/typesNavigation'
import { setUser } from '../reducers/userReducer';
import { getUserFromDataBase, saveUserDataBase } from '../firebase/dataBase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ErrorMessage } from '../components';

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
        let user = await getUserFromDataBase(idUser).catch( ()=> ErrorMessage('Error al ingresar, intente nuevamente'))
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
        getUserStorageDevice
    }
}
