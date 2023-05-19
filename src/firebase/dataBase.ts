import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { db } from './connect';

const dataBaseDigimon = async () => {
    const querySnapshot = getDocs(collection(db, "cardsDigimon"));
    return querySnapshot
}

const dataBaseUsers = async () => {
    const querySnapshot = getDocs(collection(db, "users"));
    return querySnapshot
}

export {
    dataBaseDigimon,
    dataBaseUsers,
}