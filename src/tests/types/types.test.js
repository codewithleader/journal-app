import { types } from '../../types/types';

describe('Tests with our types', () => {
	test('must have these types', () => {
		expect(types).toEqual({
			login: '[Auth] Login',
			logout: '[Auth] Logout',

			uiSetError: '[UI] Set Error',
			uiRemoveError: '[UI] Remove Error',

			uiStartLoading: '[UI] Start loading',
			uiFinishLoading: '[UI] Finish Loading',

			notesAddNew: '[Notes] New note',
			notesActive: '[Notes] Set active note',
			notesLoad: '[Notes] Load notes',
			notesUpdated: '[Notes] Updated notes',
			notesFileUrl: '[Notes] Updated image url',
			notesDelete: '[Notes] Delete note',
			notesLogoutCleaning: '[Notes] Logout Cleaning',
		});
	});
});
