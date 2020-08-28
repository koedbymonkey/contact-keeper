import React, { useState } from 'react';

const Login = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const { email, password } = user;

	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		console.log('Login Submit');
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
					/>
				</div>

				<input type='submit' value='Login' className='btn btn-primary' />
			</form>
		</div>
	);
};

export default Login;
