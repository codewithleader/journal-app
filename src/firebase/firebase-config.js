import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyClvAGe0X-Wr9ujOd3z1r-Zol6prqk7g58',
	authDomain: 'react-app-cursos-86a53.firebaseapp.com',
	projectId: 'react-app-cursos-86a53',
	storageBucket: 'react-app-cursos-86a53.appspot.com',
	messagingSenderId: '94498504570',
	appId: '1:94498504570:web:f052d7576d66cc2dbc20c3',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };

// user.uid
// user.displayName
// user.email
// user.photoURL
