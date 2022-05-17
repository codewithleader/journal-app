import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';
import { RegisterScreen } from '../../../components/auth/RegisterScreen';
import { types } from '../../../types/types';

// import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';

// jest.mock('../../../actions/auth', () => ({
//  startGoogleLogin: jest.fn(),
//  startLoginEmailPassword: jest.fn(),
// }));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
	auth: {},
	ui: {
		loading: false,
		msgError: null,
	},
};

let store = mockStore(initState);
// store.dispatch = jest.fn();

const wrapper = mount(
	<Provider store={store}>
		<MemoryRouter>
			<RegisterScreen />
		</MemoryRouter>
	</Provider>
);

describe('Testing in <RegisterScreen />', () => {
	test('should display correctly', () => {
		expect(wrapper).toMatchSnapshot();
	}); // test 1

	test('should do the dispatch of the respective action', () => {
		const emailField = wrapper.find('input[name="email"]');

		emailField.simulate('change', {
			target: {
				value: '',
				name: 'email',
			},
		});

		wrapper.find('form').simulate('submit', {
			preventDefault() {},
		});

		const actions = store.getActions();
		// console.log(actions);
		expect(actions[0]).toEqual({
			type: types.uiSetError,
			payload: 'Email is not valid',
		});
	}); // test 2

	test('should show the alert box with the error', () => {
		const initState = {
			auth: {},
			ui: {
				loading: false,
				msgError: 'Email in not valid',
			},
		};

		const store = mockStore(initState);

		const wrapper = mount(
			<Provider store={store}>
				<MemoryRouter>
					<RegisterScreen />
				</MemoryRouter>
			</Provider>
		);

		expect(wrapper.find('.auth__alert-error').exists()).toBe(true);
		expect(wrapper.find('.auth__alert-error').text().trim()).toBe(
			initState.ui.msgError
		);
	}); // test 3
}); // describe
