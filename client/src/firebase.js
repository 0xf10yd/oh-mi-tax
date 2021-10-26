import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: "AIzaSyCOJtSwvyxKuKSNpLiIUQZ9hzXN6nsgS4Q",
  authDomain: "trichain-8b6df.firebaseapp.com",
  projectId: "trichain-8b6df",
  storageBucket: "trichain-8b6df.appspot.com",
  messagingSenderId: "500143833562",
  appId: "1:500143833562:web:56f492a1565fceb49e80e3"
})

export const auth = app.auth()
export const db = app.firestore()
export default app