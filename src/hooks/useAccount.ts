import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {app, db} from '../firebase/connect'
import { doc, setDoc } from 'firebase/firestore';
import { useAppDispatch } from './useReducerHook';
import { useNavigation } from '@react-navigation/native';
import {TypeNavigation} from '../constants/typesNavigation'
import { setUser } from '../reducers/userReducer';
import { dataBaseUsers } from '../firebase/dataBase';


export const useAccount = () => {
    const auth = getAuth(app);
    const navigation = useNavigation()
    const dispatch = useAppDispatch()
    const user = auth.currentUser;

    const createAccount = (name, email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                saveDataBaseUser(userCredential.user.uid, email, password, name)
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

    const saveDataBaseUser = async (idUser, email, pass, name, decks=[''])=>{
        await setDoc(doc(db, "users", idUser), {
            idUser,
            name,
            email,
            pass,
            decks
      }).then(()=>{
        loginUser(idUser);
      })
    }

    const loginUser = async (idUser)=>{
        const db = await dataBaseUsers();
        let user = db.docs.find(found => {
            // devuelve el usuario con el mismo isUser
            return found.data().idUser == idUser
        })        
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
