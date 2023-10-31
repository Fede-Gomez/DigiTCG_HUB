import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase/connect'
import { useAppDispatch } from './useReducerHook';
import { useNavigation } from '@react-navigation/native';
import { TypeNavigation } from '../constants/typesNavigation'
import { setUser } from '../reducers/userReducer';
import { getUserFromDataBase, saveUserDataBase } from '../firebase/dataBase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAccount = () => {
    const auth = getAuth(app);
    const navigation = useNavigation()
    const dispatch = useAppDispatch()

    const createAccount = async (name, email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                saveDataBaseUser(userCredential.user.uid, email, password, name)
            }).catch(error =>{
            })
    }

    const signIn = (email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                loginUser(userCredential.user.uid)
            }).catch(error =>{
            })
    }

    const saveDataBaseUser = async (idUser, email, pass, name)=>{
        await saveUserDataBase(idUser, email, pass, name);
        loginUser(idUser);
    }

    const loginUser = async (idUser)=>{
        let user = await getUserFromDataBase(idUser)
        if (user !== null) {
            dispatch(setUser(user?.data()))
            navigation.navigate(TypeNavigation.game.homeGameTopBar);
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
        console.error('Error al recuperar el valor:', error);
        }
    };

    const saveUserStorageDevice = async (idUser:string)=>{
        try {
            await AsyncStorage.setItem('idUser',idUser);
          } catch (error) {
            console.error('Error al guardar el valor:', error);
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
