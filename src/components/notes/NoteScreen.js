import React from 'react';
import { NoteAppBar } from './NoteAppBar';

export const NoteScreen = () => {
	return (
		<div className='notes__main-content'>
			<NoteAppBar />
			<div className='notes__content'>
				<input
					className='notes__title-input'
					placeholder='Some awesome title'
					type='text'
					autoComplete='off'
				/>
				<textarea
					placeholder='What happened today'
					className='notes__textarea'
					name=''
					id=''
					cols='30'
					rows='10'
				></textarea>
				{/* <div className='notes__image'> NO FUNCIONA ASI. TUVE QUE COLOCAR LA CLASE EN LA TAG IMG PERO DENTRO DE UN DIV SIN CLASES */ }
				<div>
					<img
						className='notes__image'
						src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
						alt='landscape'
					/>
				</div>
			</div>
		</div>
	);
};
