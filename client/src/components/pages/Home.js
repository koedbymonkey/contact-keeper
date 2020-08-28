import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';

const Home = () => {
	return (
		<div className='container'>
			<div className={window.innerWidth < 740 ? 'col' : 'row'}>
				<div className='col'>
					<ContactForm />
				</div>
				<div className='col'>
					<Contacts />
				</div>
			</div>
		</div>
	);
};

export default Home;
