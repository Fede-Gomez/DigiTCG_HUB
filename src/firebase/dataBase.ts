import { collection, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { db } from './connect';

const users = 'users'
const cardsDigimon = "cardsDigimon"

const dataBaseDigimon = async () => {
    const querySnapshot = getDocs(collection(db, cardsDigimon));
    return querySnapshot
}

const dataBaseUsers = async () => {
    const querySnapshot = getDocs(collection(db, users));
    return querySnapshot
}

const getUserFromDataBase = async (idUser)=>{
    const database = await dataBaseUsers();
    const user = database.docs.find(found => {
        // devuelve el usuario con el mismo isUser
        return found.data().idUser == idUser
    })
    return user
}

const saveUserDataBase = async (idUser, email, pass, name)=>{
    const userData = {
        name,
        email,
        idUser,
        pass,
        decks: {}
      };
    await setDoc(doc(db, users, idUser),userData)
}

const userDeckDatabase = async (idUser, nombre, cards) =>{
    let user = await getUserFromDataBase(idUser)
    let nuevoUser ={
        ...user?.data(),
        decks: {
          ...user?.data().decks,
          [nombre]:cards
        }
    }
    await setDoc(doc(db, users, idUser), nuevoUser);
}

export {
    dataBaseDigimon,
    dataBaseUsers,
    userDeckDatabase,
    getUserFromDataBase,
    saveUserDataBase,
}