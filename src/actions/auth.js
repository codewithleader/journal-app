// Aquí van todas las actions
// Nota: Snippet para una export const: enf

import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';

// action login with Google
export const startGoogleLogin = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			// .then( userCredential => {
				// console.log(userCredential);
			.then(({ user }) => {
				dispatch(
						login(user.uid, user.displayName)
					)
				console.log(user.uid);
				console.log(user.displayName);
				console.log(user.email);
				console.log(user.photoURL);
				// user.uid
				// user.displayName
				// user.email
				// user.photoURL
			});
	};
};

// action login:
export const login = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
	},
});

// action login with email and password type async example:
export const startLoginEmailPassword = (email, password) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(login(123, 'Pedrito'));
		}, 2000);
	};
};
