import { initializeApp } from "firebase/app"
import {
    getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, signOut
} from 'firebase/auth'
import { getDatabase, ref } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBYYdpMmiY_svM0tn-O5Ax2yoByN6yegbc",
    authDomain: "natalyvlas-reactproject.firebaseapp.com",
    projectId: "natalyvlas-reactproject",
    storageBucket: "natalyvlas-reactproject.appspot.com",
    messagingSenderId: "412641942367",
    appId: "1:412641942367:web:728980d3341f3ff68bf4ea"
}

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)

export const signUp = async (email, password) =>
    await createUserWithEmailAndPassword(firebaseAuth, email, password)

export const signIn = async (email, password) =>
    await signInWithEmailAndPassword(firebaseAuth, email, password)

export const logOut = async () =>
    await signOut(firebaseAuth)

const db = getDatabase(app)

export const userRef = ref(db, 'user') // доступ на БД на сайте
export const messagesRef = ref(db, 'messages')

export const getChatById = (chatId) => ref(db, `messages/${chatId}`)

export const getMessageListById = (chatId) => ref(db,
    `messages/${chatId}/messageList`)