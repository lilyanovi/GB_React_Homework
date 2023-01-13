import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyChUJ5zZ5bCVHsbrNvA8U6CXdC0UWSQZh8",
  authDomain: "gb-app-4bfaa.firebaseapp.com",
  projectId: "gb-app-4bfaa",
  storageBucket: "gb-app-4bfaa.appspot.com",
  messagingSenderId: "832354846128",
  appId: "1:832354846128:web:aff9e4d76d59e97966c275"
};

const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app)

export const signUp = async (email, password) => await createUserWithEmailAndPassword(firebaseAuth, email, password)

export const signIn = async (email, password) => await signInWithEmailAndPassword(firebaseAuth, email, password)

export const logOut = async () => await signOut(firebaseAuth)

const db = getDatabase(app)

export const userRef = ref(db, 'user')
export const messagesRef = ref(db, 'messages')

export const getChatById = (chatId) => ref(db, `messages/${chatId}`)

export const getMessageListById = (chatId) => ref(db, `messages/${chatId}/messageList`)
