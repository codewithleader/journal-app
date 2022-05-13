import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Testing authReducer', () => {
	test('should to do login', () => {
		const initState = {};
		const action = {
			type: types.login,
			payload: {
				uid: 'abc',
				displayName: 'Elis Antonio',
			},
  };
  const state = authReducer(initState, action);

  expect(state).toEqual({
   uid: 'abc',
   name: 'Elis Antonio',
  });
 }); //test1
 
 test('Should to do logout', () => {
  const initState = {
   uid: 'abcdefghijklmnopqrstuvwxyz',
   name: 'Elis Antonio',
  };
  const action = {
   type: types.logout,
  };

  const state = authReducer(initState, action);

  expect(state).toEqual({});

 }); //test2

 test('should not make changes in the state', () => {
  const initState = {
   uid: 'abcdefghijh',
   name: 'Elis Antonio',
  };
  const action = {
   type: 'unknown',
  }

  const state = authReducer(initState, action);

  expect(state).toEqual(initState);

 }); //test3
 
 

}); // describe
