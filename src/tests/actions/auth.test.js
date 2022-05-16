import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import { types } from '../../types/types';
import {
	login,
	logout,
	startLoginEmailPassword,
	startLogout,
} from '../../actions/auth';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe('Testing with the auth actions', () => {
	beforeEach(() => {
		store = mockStore(initState);
	});

	test('login and logout should create the respective action', () => {
		const uid = 'ABC123';
		const displayName = 'Elis Antonio';

		const loginAction = login(uid, displayName);
		const logoutAction = logout();

		expect(loginAction).toEqual({
			type: types.login,
			payload: {
				uid,
				displayName,
			},
		});

		expect(logoutAction).toEqual({
			type: types.logout,
		});
	}); // test 1

	test('should do the startLogout', async () => {
		await store.dispatch(startLogout());
		const actions = store.getActions();
		// console.log(actions);

		expect(actions[0]).toEqual({
			type: types.logout,
		});

		expect(actions[1]).toEqual({
			type: types.notesLogoutCleaning,
		});
	}); // test 2

	test('should start the startLoginEmailPassword', async () => {
		await store.dispatch(startLoginEmailPassword(process.env.REACT_APP_EMAIL_TEST, process.env.REACT_APP_PASSWORD));
		const actions = store.getActions();
		// console.log(actions);
		expect(actions[1]).toEqual({
			type: types.login,
			payload: {
				uid: process.env.REACT_APP_UID_EMAIL_TEST,
				displayName: null,
			},
		});
	}); // test 3
}); // describe
