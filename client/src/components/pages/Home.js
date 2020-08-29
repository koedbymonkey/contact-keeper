import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);

	return (
		<div className='container'>
			<div className={window.innerWidth < 740 ? 'col' : 'row'}>
				<div className='col'>
					<ContactForm />
				</div>
				<div className='col'>
					<div className='container mt-4'>
						<h2 className='text-light'>Contacts</h2>
						<ContactFilter />
						<Contacts />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
