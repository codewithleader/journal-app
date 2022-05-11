import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
	const dispatch = useDispatch();

	const { active: note } = useSelector((state) => state.notes);
	const [formValues, handleInputChange, reset] = useForm(note);
	const { body, title } = formValues;
	const activeId = useRef(note.id);

	useEffect(() => {
		if (note.id !== activeId.current) {
			reset(note);
			activeId.current = note.id;
		}
	}, [ note, reset ]);
	
	useEffect(() => {
		dispatch(activeNote(formValues.id, { ...formValues }));
	}, [dispatch, formValues]);

	return (
		<div className='notes__main-content'>
			<NotesAppBar />
			<div className='notes__content'>
				<input
					autoComplete='off'
					className='notes__title-input'
					name='title'
					onChange={handleInputChange}
					placeholder='Some awesome title'
					type='text'
					value={title}
				/>
				<textarea
					className='notes__textarea'
					name='body'
					onChange={handleInputChange}
					placeholder='What happened today'
					value={body}
					cols='30'
					rows='10'
				></textarea>
				{/* <div className='notes__image'> NO FUNCIONA ASI. TUVE QUE COLOCAR LA CLASE EN LA TAG IMG PERO DENTRO DE UN DIV SIN CLASES */}
				{note.url && (
					<div>
						<img
							className='notes__image'
							src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
							alt='landscape'
						/>
					</div>
				)}
			</div>
		</div>
	);
};
