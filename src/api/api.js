import { database } from './config';
import {
    doc,
    addDoc,
    collection,
    updateDoc,
    deleteDoc,
    onSnapshot,
    getDoc,
    getDocs,
} from 'firebase/firestore';

const collectionName = 'contacts';

export const createContact = contact =>
    addDoc(collection(database, collectionName), contact);

export const getContacts = () =>
    getDocs(collection(database, collectionName));

export const getOneContact = id =>
    getDoc(doc(database, collectionName, id));

export const updateContact = (id, fields) =>
    updateDoc(doc(database, collectionName, id), fields);

export const deleteContact = id =>
    deleteDoc(doc(database, collectionName, id));

export const onGetContacts = callback =>
    onSnapshot(collection(database, collectionName), callback);