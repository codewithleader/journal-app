import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat);

export const NotesAppBar = () => {
	const { active } = useSelector((state) => state.notes);
	const dateActiveNote = active.date;

	const dispatch = useDispatch();
	const handleSave = () => {
		dispatch(startSaveNote(active));
	};
	const handlePictureClick = () => {
		document.querySelector('#fileSelector').click();
	};
	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			dispatch(startUploading(file));
		}
	};
	return (
		<div className='notes__appbar'>
			<span>
				Note made on {dayjs(dateActiveNote).format('MMMM Do YYYY')} at{' '}
				{dayjs(dateActiveNote).format('hh:mm:ssa')}
			</span>
			<input
				id='fileSelector'
				name='file'
				onChange={handleFileChange}
				style={{ display: 'none' }}
				type='file'
			/>
			<div>
				<button className='btn' onClick={handlePictureClick}>
					Picture
				</button>
				<button className='btn' onClick={handleSave}>
					Save
				</button>
			</div>
		</div>
	);
};
