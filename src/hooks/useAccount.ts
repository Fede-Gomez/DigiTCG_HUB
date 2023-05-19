import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {app, db} from '../firebase/connect'
import { doc, setDoc } from 'firebase/firestore';
import { useAppSelector } from './useReducerHook';
import { useNavigation } from '@react-navigation/native';
import {TypeNavigation} from '../constants/typesNavigation'


export const useAccount = () => {
    const auth = getAuth(app);
    const navigation = useNavigation()
    const user = auth.currentUser;


    const createAccount = (name, email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                saveDataBaseUser(userCredential.user.uid, email, password, name)
            }).catch(error =>{
                console.log(error);
            })
    }
    // json formateado
    // {
    //     "_tokenResponse":{
    //        "email":"a@aa.com",
    //        "expiresIn":"3600",
    //        "idToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjFiYjI2MzY4YTNkMWExNDg1YmNhNTJiNGY4M2JkYjQ5YjY0ZWM2MmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdHJhZGluZy1jYXJkLWdhbWUtam91cm5leSIsImF1ZCI6InRyYWRpbmctY2FyZC1nYW1lLWpvdXJuZXkiLCJhdXRoX3RpbWUiOjE2ODQ0MjQ4NTMsInVzZXJfaWQiOiJGTjlJa0NNejZDaEJINXo3MkprVlZLWDNyRW8yIiwic3ViIjoiRk45SWtDTXo2Q2hCSDV6NzJKa1ZWS1gzckVvMiIsImlhdCI6MTY4NDQyNDg1MywiZXhwIjoxNjg0NDI4NDUzLCJlbWFpbCI6ImFAYWEuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFAYWEuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.k3lFSrAgdoBUFEafaaFhPNm1FATTYrteeYSz8n-QamSSpGTJLrhcyeVGW0NigVyy9UTCIVCkyWA2HWKAiR45X4Y1Rke92s7G_aPQ_Ui_GGfrnsiUEAMrwAMovKAh-Gd5O-iGXG73vO7O6g3A35FTYEdfvNfg1uVmQZ_RJTj_jY7-ZVP6m9dmG_sLwVC5dB2ay8KZpHifD9hbatiC1YpLZhaw3oOj1iyGMsJaHhGgu3lvgMddl3gF6uvXsRUVATJA1LLD1ZySenTTU3DzJzNaTcv6ESvTMqUPsRoFbrcEKv8uAVsz5nknQBmNNF6KvL-q1hVWC_z0m5JaYZJG0Ib2QA",
    //        "kind":"identitytoolkit#SignupNewUserResponse",
    //        "localId":"FN9IkCMz6ChBH5z72JkVVKX3rEo2",
    //        "refreshToken":"APZUo0Q1nSHbeytzM8qqcQ9GYJyIHFFYfdHxAlzf3lSb-iGSLFp7KAlVHg2_GIyhhxCvy8cI3-HYyP2CH7XqkkLIui0HNtB5h2ggns0AZMNcdcl2GQuTxLWxUX5XhJT_R8wf67Yjq9jIuEm7Onpof12oQ0d4H0IxAFoGplAIBXuX1CblD_J1mW0z1sTVF5s2k4fihqbYC9bJhDifIF7CBPHKCaato3nXs7RJcG2SPJT573Uj2kJJst4"
    //     },
    //     "operationType":"signIn",
    //     "providerId":null,
    //     "user":{
    //        "_redirectEventId":"undefined",
    //        "apiKey":"AIzaSyA_iHjadECnpGmqfZp02CLD4Iy-IPv6tzw",
    //        "appName":"[DEFAULT]",
    //        "createdAt":"1684424853046",
    //        "displayName":"undefined",
    //        "email":"a@aa.com",
    //        "emailVerified":false,
    //        "isAnonymous":false,
    //        "lastLoginAt":"1684424853046",
    //        "phoneNumber":"undefined",
    //        "photoURL":"undefined",
    //        "providerData":[
    //           "Array"
    //        ],
    //        "stsTokenManager":[
    //           "Object"
    //        ],
    //        "tenantId":"undefined",
    //        "uid":"FN9IkCMz6ChBH5z72JkVVKX3rEo2"
    //     }
    //  }
    const signIn = (email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
            .then(()=>{
                loginUser()
            }).catch(error =>{
                console.log(error);
            })
    }

    const saveDataBaseUser = async (idUser, email, pass, name, decks=[])=>{
        await setDoc(doc(db, "users", idUser), {
            idUser,
            name,
            email,
            pass,
            decks
      }).then(()=>{
        loginUser();
      })
    }
    const loginUser = ()=>{
        if (user !== null) {
            console.log('cargar user como estado global');
            navigation.navigate(TypeNavigation.game.homeGame);
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
