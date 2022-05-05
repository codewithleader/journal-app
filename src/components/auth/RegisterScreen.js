import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator'

export const RegisterScreen = () => {

	const [formValues, handleInputChange] = useForm({
		name: 'Elis Antonio',
		email: 'elis@mail.com',
		password: '123456',
		password2: '123456',
	});

	const { name, email, password, password2 } = formValues;

	const handleRegister = (e) => {
		e.preventDefault();
		if (isFormValid()) {
			console.log('formulario correcto');
		}
	}

	const isFormValid = () => {
		if (name.trim().length === 0) {
			console.log('name is required');
			return false;
		} else if (!validator.isEmail(email)) {
			console.log('email is not valid');
			return false;
		} else if (password !== password2 || password.length < 5) {
			console.log('password should be at least 6 characters and match each other');
			return false;
		}

		return true;
	}// cierre isFormValid

	return (
		<>
			<h3 className='auth__title'>Register</h3>
			<form onSubmit={ handleRegister }>
				
				<div className="auth__alert-error">
					hola mundo
				</div>

				<input
					autoComplete='off'
					className='auth__input'
					name='name'
					placeholder='Name'
					type='text'
					value={ name }
					onChange={ handleInputChange }
				/>
				<input
					autoComplete='off'
					className='auth__input'
					name='email'
					placeholder='Email'
					type='text'
					value={ email }
					onChange={ handleInputChange }
				/>
				<input
					autoComplete='off'
					className='auth__input'
					name='password'
					placeholder='Password'
					type='password'
					value={ password }
					onChange={ handleInputChange }
				/>
				<input
					autoComplete='off'
					className='auth__input'
					name='password2'
					placeholder='Confirm password'
					type='password'
					value={ password2 }
					onChange={ handleInputChange }
				/>
				<button className='btn btn-primary btn-block mb-5' type='submit'>
					Register
				</button>

				
				<Link className='link' to='/auth/login'>
					Already registered?
				</Link>
			</form>
		</>
	);
}