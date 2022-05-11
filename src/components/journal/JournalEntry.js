import React from 'react';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { activeNote } from '../../actions/notes';
import { useDispatch } from 'react-redux';

// to add more formats to dayjs:
dayjs.extend(advancedFormat);

export const JournalEntry = ({ id, date, title, body, url }) => {
	const noteDate = dayjs(date);
	const dispatch = useDispatch();

	const handleEntryClick = () => {
		dispatch(
			activeNote(id, {
				date,
				title,
				body,
				url,
			})
		);
	};
	return (
		<div className='journal__entry pointer' onClick={handleEntryClick}>
			{url && (
				<div
					className='journal__entry-picture'
					style={{
						backgroundSize: 'cover',
						backgroundImage: `url(${url})`,
					}}
				></div>
			)}
			<div className='journal__entry-body'>
				<p className='journal__entry-title'>{title}</p>
				<p className='journal__entry-content'>{body}</p>
			</div>
			<div className='journal__entry-date-box'>
				<span>{noteDate.format('dddd')}</span>
				<h4>{noteDate.format('Do')}</h4>
			</div>
		</div>
	);
};
