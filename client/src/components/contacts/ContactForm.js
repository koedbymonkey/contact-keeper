import React, { useState, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
	const contactContext = useContext(ContactContext);

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
		contactContext.addContact(contact);
		setContact({
			name: '',
			email: '',
			phone: '',
			type: 'personal',
		});
	};

	return (
		<form onSubmit={onSubmit} className='form-group container mt-4'>
			<h2 className='text-primary'>Add Contact</h2>
			<input
				className='form-control'
				type='text'
				placeholder='Name'
				name='name'
				value={name}
				onChange={onChange}
			/>
			<input
				className='form-control my-2'
				type='email'
				placeholder='Email'
				name='email'
				value={email}
				onChange={onChange}
			/>
			<input
				className='form-control'
				type='tel'
				placeholder='Phone'
				name='phone'
				value={phone}
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
					className='form-control'
					type='submit'
					value='Add Contact'
					className=' btn btn-primary btn-block'
				/>
			</div>
		</form>
	);
};

export default ContactForm;
