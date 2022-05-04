// Aquí van todas las actions

import { types } from '../types/types';



// action 1: login
export const login = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
	},
});

// action async example:
export const startLoginEmailPassword = (email, password) => {
 return (dispatch) => {
  setTimeout(() => {
   dispatch(login(123, 'Pedrito'));
  }, 2000);
 }
}
