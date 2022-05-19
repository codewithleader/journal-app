import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import { firebase } from '../../firebase/firebase-config';

import { login } from '../../actions/auth';
import { AppRouter } from '../../routers/AppRouter';
import { act } from '@testing-library/react';


jest.mock('../../actions/auth', () => ({
  login: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
  notes: {
    active: {
      id: 'ABC',
    },
    notes: [],
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

describe('Testing in <AppRouter />', () => {
  test('should call login if I am authenticated', async () => {
    let user;

    await act(async () => {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(
          process.env.REACT_APP_EMAIL_TEST,
          process.env.REACT_APP_PASSWORD
        );
      // console.log(userCredential);

      user = userCredential.user;

      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <AppRouter />
          </MemoryRouter>
        </Provider>
      );
    });

    // expect(login).toHaveBeenCalled();
    expect(login).toHaveBeenCalledWith(
      process.env.REACT_APP_UID_EMAIL_TEST,
      null
    );
  }); // test 1 ⭐⭐⭐⭐⭐👨‍💻´:-)
}); // describe
