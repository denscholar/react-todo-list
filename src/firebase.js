import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDPZ42TlER1vZwCxygbYCQ4oJ78FvnRvLM",
    authDomain: "todo-37ae1.firebaseapp.com",
    projectId: "todo-37ae1",
    storageBucket: "todo-37ae1.appspot.com",
    messagingSenderId: "106864239400",
    appId: "1:106864239400:web:cf85cefa41b2895e08661d"
});

const db = getFirestore(firebaseApp);

export { db };