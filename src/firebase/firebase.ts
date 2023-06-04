// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
	apiKey: 'AIzaSyCQcvXkoKx5XAbFHThK5KveLzW0k_ofPK0',
	authDomain: 'leetclone-david-proj.firebaseapp.com',
	projectId: 'leetclone-david-proj',
	storageBucket: 'leetclone-david-proj.appspot.com',
	messagingSenderId: '486818305474',
	appId: '1:486818305474:web:2a82965de98767705e725b',
	measurementId: 'G-GPEMW2KX88',
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const fireStore = getFirestore(app)

export { app, auth, fireStore };
