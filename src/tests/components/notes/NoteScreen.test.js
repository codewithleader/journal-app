import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';
import { activeNote } from '../../../actions/notes';
import { NoteScreen } from '../../../components/notes/NoteScreen';

jest.mock('../../../actions/notes', () => ({
  activeNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: '1',
    name: 'Elis Antonio',
  },
  ui: {
    loading: false,
    msgError: null,
  },
  notes: {
    active: {
      id: 1234,
      title: 'Hello',
      body: 'word',
      date: 0,
    },
    notes: [],
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <NoteScreen />
  </Provider>
);

describe('Testing in the <NoteScreen />', () => {
  test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
  }); // test 1

  test('should dispatch the active note', () => {
    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: 'Hello again',
      },
    });

    expect(activeNote).toHaveBeenLastCalledWith(
        1234,
        {
            body: 'word',
            title: 'Hello again',
            id: 1234,
            date: 0,
        }
    )  
  }); // test 2
}); // describe
