import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
	const contactContext = useContext(ContactContext);
	const { addContact, current, clearCurrent, updateContact } = contactContext;

	useEffect(() => {
		if (current !== null) {
			setContact(current);
		} else {
			setContact({
				name: '',
				email: '',
				phone: '',
				type: 'personal',
			});
		}
	}, [contactContext, current]);

	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		type: 'personal',
	});

	const { name, email, phone, type } = contact;

	const onChange = (e) =>
		setContact({ ...contact, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (!current) {
			addContact(contact);
		} else {
			updateContact(contact);
		}
		clearAll();
	};

	const clearAll = () => {
		clearCurrent();
	};

	return (
		<form onSubmit={onSubmit} className='form-group container mt-4'>
			<h2 className='text-primary'>
				{!current ? 'Add Contact' : 'Edit Contact'}
			</h2>
			<input
				className='form-control'
				type='text'
				placeholder='Name'
				name='name'
				value={name}
				autocomplete='name'
				onChange={onChange}
			/>
			<input
				className='form-control my-2'
				type='email'
				placeholder='Email'
				name='email'
				value={email}
				autocomplete='email'
				onChange={onChange}
			/>
			<input
				className='form-control'
				type='tel'
				placeholder='Phone'
				name='phone'
				value={phone}
				autocomplete='tel'
				onChange={onChange}
			/>
			<div className='card m-2 p-2'>
				<h5>Contact Type</h5>
				<div className='form-check'>
					<input
						className='form-check-input'
						type='radio'
						name='type'
						id='personal'
						value='personal'
						checked={type === 'personal'}
						onChange={onChange}
					/>
					<label htmlFor='personal' className='form-check-label'>
						Personal
					</label>
				</div>
				<div className='form-check'>
					<input
						className='form-check-input'
						type='radio'
						name='type'
						id='professional'
						value='professional'
						checked={type === 'professional'}
						onChange={onChange}
					/>
					<label htmlFor='professional' className='form-check-label'>
						Professional
					</label>
				</div>
			</div>
			<div>
				<input
					className='form-control btn btn-primary btn-block'
					type='submit'
					value={!current ? 'Add Contact' : 'Update Contact'}
				/>
			</div>
			{current && (
				<div>
					<button className='btn btn-light btn-block mt-2' onClick={clearAll}>
						Clear
					</button>
				</div>
			)}
		</form>
	);
};

export default ContactForm;
