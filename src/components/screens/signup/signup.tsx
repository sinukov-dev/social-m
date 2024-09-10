'use client'
import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { AtSign, KeyRound, User2Icon } from 'lucide-react'
//scss
import styles from '@/components/ui/auth/auth.module.scss'
// blocks
import Input from '@/components/ui/input/input'
import { SignupTop } from '@/components/ui/auth/signup/signupTop'
import { AuthError } from '@/components/ui/auth/authError'
import { SignupBottom } from '@/components/ui/auth/signup/signupBottom'

export function SignUp() {
	//get auth actions and states
	const { register, error } = useAuth()
	//states
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [name, setName] = useState('')

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault()
		await register(email, password, name) // Выполняем вход
	}

	return (
		<div className={styles.container}>
			<SignupTop />
			{error ? <AuthError error={error} /> : ''}

			<form onSubmit={handleRegister} className={styles.form}>
				<Input
					placeholder={'Enter email'}
					type='email'
					Icon={AtSign}
					// error={{ message: `Email is invalid`, type: 'min' }}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<Input
					placeholder={'Enter passWord'}
					type='password'
					Icon={KeyRound}
					// error={{ message: `Password is invalid`, type: 'min' }}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<Input
					placeholder={'Enter Name'}
					type='text'
					Icon={User2Icon}
					// error={{ message: `Password is invalid`, type: 'min' }}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<SignupBottom />
			</form>
		</div>
	)
}
