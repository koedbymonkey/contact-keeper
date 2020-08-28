import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;

	const { login, error, clearErrors, isAuthenticated } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/');
		}

		if (error === 'Invalid Credentials') {
			setAlert(error, 'danger');
			clearErrors();
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated, props.history]);

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const { email, password } = user;

	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		login({
			email,
			password,
		});
	};

	return (
		<div className='card m-3 p-3'>
			<h1>
				Account <span className='text-primary'>Login</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
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
				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						placeholder='6 or more characters'
						value={password}
						onChange={onChange}
						className='form-control'
						required
					/>
				</div>

				<input type='submit' value='Login' className='btn btn-primary' />
			</form>
		</div>
	);
};

export default Login;
