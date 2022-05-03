import React from 'react';

export const JournalEntry = () => {
	return (
		<div className='journal__entry pointer'>
			<div
				className='journal__entry-picture'
				style={{
					backgroundSize: 'cover',
					backgroundImage:
						'url(https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/archives_raquarii.jpg)',
				}}
			></div>
			<div className='journal__entry-body'>
				<p className='journal__entry-title'>Un nuevo día</p>
				<p className='journal__entry-content'>Lorem ipsum dolor sit amet.</p>
   </div>
   <div className="journal__entry-date-box">
    <span>Monday</span>
    <h4>28</h4>
   </div>
		</div>
	);
};
