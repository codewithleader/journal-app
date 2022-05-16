import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
	startLoadingNotes,
	startNewNote,
	startSaveNote,
} from '../../actions/notes';
import { types } from '../../types/types';
import { db } from '../../firebase/firebase-config';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
	auth: {
		uid: 'TESTING',
	},
};
let store = mockStore(initState);

describe('Testing with notes actions', () => {
	// Initialize store
	beforeEach(() => {
		store = mockStore(initState);
	});

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

		const docId = actions[0].payload.id;
		await db.doc(`/TESTING/journal/notes/${docId}`).delete();
	}); // test 1

	test('startLoadingNotes should load notes', async () => {
		await store.dispatch(startLoadingNotes('TESTING'));
		const actions = store.getActions();
		// console.log(actions);
		expect(actions[0]).toEqual({
			type: types.notesLoad,
			payload: expect.any(Array),
		});

		const expected = {
			body: expect.any(String),
			date: expect.any(Number),
			id: expect.any(String),
			title: expect.any(String),
		};
		expect(actions[0].payload[0]).toMatchObject(expected);
	}); // test 2

	test('startSaveNote should update the note', async () => {
		const note = {
			body: 'Body updated from testing',
			id: 'aA22S6L37jN68qIAaLE8',
			title: 'Testing in startSaveNote',
		};

		await store.dispatch(startSaveNote(note));

		const actions = store.getActions();
		// console.log(actions);
		// console.log(actions[0].payload);
		// console.log(actions[0].payload.note);

		expect(actions[ 0 ].type).toBe(types.notesUpdated);
		
		const docRef = await db.doc(`/TESTING/journal/notes/${note.id}`).get();

		expect(docRef.data().title).toBe(note.title);

		// expect(actions[0].payload.note).toEqual(note);
		// expect(actions[0].payload.note.title).toBe('Testing in startSaveNote');
		// expect(actions[0].payload.note.body).toBe('Body updated from testing');
		// expect(actions[0].payload.note.id).toBe('aA22S6L37jN68qIAaLE8');
	}); // test 3
}); // describe
