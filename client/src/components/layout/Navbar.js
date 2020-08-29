import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const Navbar = ({ title, icon }) => {
	const authContext = useContext(AuthContext);
	const contactContext = useContext(ContactContext);

	const { isAuthenticated, logout, user } = authContext;
	const { clearContacts } = contactContext;

	const onLogout = () => {
		logout();
		clearContacts();
	};

	const authLinks = (
		<Fragment>
			<li className='navbar-text'>
				Hello <strong>{user && user.name}</strong>{' '}
			</li>
			<li className='nav-item'>
				<a onClick={onLogout} href='#!' className='nav-link ml-3'>
					<i className='fa fa-sign-out'>
						{' '}
						<span className='hide-sm'>Logout</span>
					</i>
				</a>
			</li>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<li className='nav-item'>
				<Link to='/register' className='nav-link'>
					Register
				</Link>
			</li>
			<li className='nav-item'>
				<Link to='/login' className='nav-link'>
					Login
				</Link>
			</li>
		</Fragment>
	);

	return (
		<nav className=' nav navbar navbar-expand navbar-dark bg-primary'>
			<a href='/' className='nav navbar-brand'>
				<i className={icon} /> {title}
			</a>
			<ul className='navbar-nav'>{isAuthenticated ? authLinks : guestLinks}</ul>
		</nav>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
};

Navbar.defaultProps = {
	title: 'Contact Keeper',
	icon: 'fa fa-id-card',
};

export default Navbar;
