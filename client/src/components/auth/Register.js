import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Register = () => {
	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;

	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = user;

	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (name === '' || email === '' || password === '') {
			setAlert('Please enter all fields', 'danger');
		} else if (password !== password2) {
			setAlert('Passwords do not match', 'danger');
		} else {
			console.log('Register Submit');
		}
	};

	return (
		<div className='card m-3 p-3'>
			<h1>
				Account <span className='text-primary'>Register</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className='form-row'>
					<div className='form-group col-md-6'>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							name='name'
							placeholder='John Doe'
							value={name}
							onChange={onChange}
							className='form-control'
							required
						/>
					</div>
					<div className='form-group col-md-6'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							name='email'
							placeholder='jdoe@gmail.com'
							value={email}
							onChange={onChange}
							className='form-control'
							required
						/>
					</div>
				</div>

				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						placeholder='Password must be 6 or more characters'
						value={password}
						onChange={onChange}
						className='form-control'
						required
						minLength='6'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='password2'>Confirm Password</label>
					<input
						type='password'
						name='password2'
						value={password2}
						onChange={onChange}
						className='form-control'
						required
						minLength='6'
					/>
				</div>
				<input type='submit' value='Register' className='btn btn-primary' />
			</form>
		</div>
	);
};

export default Register;
