import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// console.log(process.env);

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };

// 	const firebaseConfigTesting = {
// 	apiKey: 'AIzaSyAt045VwTL954dSR_LF71mhFtCfg',
// 	authDomain: 'react-app-test-c948f.firebaseapp.com',
// 	projectId: 'react-app-test-c948f',
// 	storageBucket: 'react-app-test-c948f.com',
// 	messagingSenderId: '380136369348',
// 	appId: '1:380136369348:web:7542464e111d7741656d91',
// };

// const firebaseConfig = {
// 	apiKey: 'AIzaSyClvAGe0X-Wr9ujOd3z1r-',
// 	authDomain: 'react-app--86a53.firebaseapp.com',
// 	projectId: 'react-app--86a53',
// 	storageBucket: 'react-app--86a53..com',
// 	messagingSenderId: '94498504570',
// 	appId: '1:94498504570:web:f052d7576d66cc2dbc20c3',
// };

// console.log(process.env);

// if (process.env.NODE_ENV === 'test') {
// 	// TESTING:
// 	firebase.initializeApp(firebaseConfigTesting);
// } else {
// 	// Development/Production:
// 	firebase.initializeApp(firebaseConfig);
// }

// const db = firebase.firestore();
// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// export { db, googleAuthProvider, firebase };

// TODO: Create a new database exclusively for Production
/*
 **	if (process.env.NODE_ENV === 'test') {
 **	// TESTING:
 **	firebase.initializeApp(firebaseConfigTesting);
 **	} else (process.env.NODE_ENV === 'development') {
 **	// Development
 **	firebase.initializeApp(firebaseConfigDevelopment);
 ** } else (process.env.NODE_ENV === 'production') {
 **	// Production
 **	firebase.initializeApp(firebaseConfig);
 ** }
 */

// user.uid
// user.displayName
// user.email
// user.photoURL
