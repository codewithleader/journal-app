import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startNewNote } from '../../actions/notes';
import { types } from '../../types/types';
import { db } from '../../firebase/firebase-config';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
	auth: {
		uid: 'TESTING',
	},
});

describe('Testing with notes actions', () => {
	test('should create a new note startNewNote', async () => {
		await store.dispatch(startNewNote());
		const actions = store.getActions();
		// console.log(actions);

		expect(actions[0]).toEqual({
			type: types.notesActive,
			payload: {
				body: '',
				date: expect.any(Number),
				id: expect.any(String),
				title: '',
			},
		});

		expect(actions[1]).toEqual({
			type: types.notesAddNew,
			payload: {
				body: '',
				date: expect.any(Number),
				id: expect.any(String),
				title: '',
			},
		});

		const docId = actions[ 0 ].payload.id;
		await db.doc(`/TESTING/journal/notes/${docId}`).delete();
	}); // test 1
}); // describe
