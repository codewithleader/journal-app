import {
	finishLoading,
	removeError,
	setError,
	startLoading,
} from '../../actions/ui';
import { types } from '../../types/types';

describe('Testing in ui.js-actions', () => {
	test('should work all actions', () => {
		const action = setError('help me');

		expect(action).toEqual({
			type: types.uiSetError,
			payload: 'help me',
		});

		const removeErrorAction = removeError();
		const startLoadingAction = startLoading();
		const finishLoadingAction = finishLoading();

		expect(removeErrorAction).toEqual({
			type: types.uiRemoveError,
		});
		expect(startLoadingAction).toEqual({
			type: types.uiStartLoading,
		});
		expect(finishLoadingAction).toEqual({
			type: types.uiFinishLoading,
		});
	}); //test 1
}); // describe
