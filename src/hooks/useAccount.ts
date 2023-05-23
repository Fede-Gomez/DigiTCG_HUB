import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {app, db} from '../firebase/connect'
import { doc, setDoc } from 'firebase/firestore';
import { useAppDispatch } from './useReducerHook';
import { useNavigation } from '@react-navigation/native';
import {TypeNavigation} from '../constants/typesNavigation'
import { setUser } from '../reducers/userReducer';
import { getUserFromDataBase, saveUserDataBase } from '../firebase/dataBase';


export const useAccount = () => {
    const auth = getAuth(app);
    const navigation = useNavigation()
    const dispatch = useAppDispatch()

    const createAccount = (name, email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                saveDataBaseUser(userCredential.user.uid, email, password, name)
                navigation.navigate(TypeNavigation.game.homeGameDrawer);
            }).catch(error =>{
                console.log(error);
            })
    }

    const signIn = (email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                loginUser(userCredential.user.uid)
            }).catch(error =>{
                console.log(error);
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
            navigation.navigate(TypeNavigation.game.homeGameDrawer);
        }else{
            navigation.navigate(TypeNavigation.account.login);
        }
    }
    return{
        createAccount,
        signIn,
        loginUser, 
        saveDataBaseUser
    }
}
