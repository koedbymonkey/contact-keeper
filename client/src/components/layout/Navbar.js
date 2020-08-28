import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
	return (
		<nav className=' nav navbar navbar-expand navbar-dark bg-primary'>
			<a className='nav navbar-brand'>
				<i className={icon} /> {title}
			</a>
			<ul className='navbar-nav'>
				<li className='nav-item'>
					<Link to='/' className='nav-link'>
						Home
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/about' className='nav-link'>
						About
					</Link>
				</li>
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
			</ul>
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
