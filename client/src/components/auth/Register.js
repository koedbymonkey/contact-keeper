import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;

	const { register, error, clearErrors, isAuthenticated } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/');
		}

		if (error === 'User already exists') {
			setAlert(error, 'danger');
			clearErrors();
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated, props.history]);

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
			register({
				name,
				email,
				password,
			});
		}
	};

	return (
		<div className='card m-3 p-3'>
			<h1>
				<span className='text-light'>Account</span>{' '}
				<span className='text-primary'>Register</span>
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
							autocomplete='name'
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
							autocomplete='email'
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
						autocomplete='new-password'
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
						autocomplete='new-password'
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
