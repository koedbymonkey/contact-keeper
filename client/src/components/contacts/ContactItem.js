import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
	const contactContext = useContext(ContactContext);
	const { deleteContact, setCurrent, clearCurrent } = contactContext;
	const { _id, name, email, phone, type } = contact;

	const onDelete = () => {
		deleteContact(_id);
		clearCurrent();
	};

	return (
		<div className='card bg-secondary p-2 m-2'>
			<h4 className='text-light text-left my-auto'>
				{name}
				<span
					className={`badge pull-right ${
						type === 'professional' ? 'badge-success' : 'badge-info'
					}`}
				>
					{type.charAt(0).toUpperCase() + type.slice(1)}
				</span>
			</h4>
			<ul className='list-group list-group-flush mt-2'>
				{email && (
					<li className='list-group-item bg-secondary'>
						<i className='fa fa-envelope-open'> {email}</i>
					</li>
				)}
				{email && (
					<li className='list-group-item bg-secondary'>
						<i className='fa fa-phone'> {phone}</i>
					</li>
				)}
			</ul>
			<div className='container mt-2'>
				<button
					className='btn btn-dark btn-sm mr-4'
					onClick={() => setCurrent(contact)}
				>
					Edit
				</button>
				<button className='btn btn-danger btn-sm' onClick={onDelete}>
					Delete
				</button>
			</div>
		</div>
	);
};

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
};

export default ContactItem;
