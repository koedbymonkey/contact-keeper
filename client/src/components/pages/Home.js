import React from 'react';
import Contacts from '../contacts/Contacts';

const Home = () => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col'></div>
				<div className='col'>
					<Contacts></Contacts>
				</div>
			</div>
		</div>
	);
};

export default Home;
