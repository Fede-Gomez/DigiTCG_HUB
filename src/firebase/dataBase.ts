import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { db } from './connect';

const users = 'users'
const cardsDigimon = "cardsDigimon"
const filterCards = "filterCards"

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

const userDeckUpdateDatabase = async (idUser, updateDeckUser) =>{
    await setDoc(doc(db, users, idUser), updateDeckUser);
}

const userDeckRemoveDatabase = async (user)=>{
    await setDoc(doc(db, users, user.idUser), user);
}

const getFiltersCards = async (nameGame)=>{
    const docRef = doc(db, filterCards, nameGame);
    const database = getDoc(docRef);
    return database
}

export {
    dataBaseDigimon,
    dataBaseUsers,
    userDeckUpdateDatabase,
    getUserFromDataBase,
    saveUserDataBase,
    userDeckRemoveDatabase,
    getFiltersCards
}