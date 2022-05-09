// Here all actions
// Note: Snippet for export const: enf

import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';

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
		dispatch(startLoading());
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
				dispatch(finishLoading());
			}) // then
			.catch((e) => {
				console.log(e);
				dispatch(finishLoading());
			});
	};
};

// action with Email and Password
export const startRegisterWithEmailPasswordName = (email, password, name) => {
	return (dispatch) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(async ({ user }) => {
				await user.updateProfile({ displayName: name });
				dispatch(login(user.uid, user.displayName));
			})
			.catch((e) => console.log(e));
	};
};


// action login with Google
export const startGoogleLogin = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			// .then( userCredential => {
			// console.log(userCredential);
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
				// console.log(user.uid);
				// console.log(user.displayName);
				// console.log(user.email);
				// console.log(user.photoURL);
				// // user.uid
				// user.displayName
				// user.email
				// user.photoURL
			});
	};
};
