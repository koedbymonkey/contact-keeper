import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
	return (
		<div className=' nav navbar bg-primary'>
			<h1 className='nav navbar-brand'>
				<i className={icon} /> {title}
			</h1>
		</div>
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
