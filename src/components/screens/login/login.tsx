'use client'
import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { AtSign, KeyRound } from 'lucide-react'
//scss
import styles from '@/components/ui/auth/auth.module.scss'
// blocks
import Input from '@/components/ui/input/input'
import { LoginTop } from '@/components/ui/auth/login/loginTop'
import { AuthError } from '@/components/ui/auth/authError'
import { LoginBottom } from '@/components/ui/auth/login/loginBottom'

export function Login() {
	const { login, error } = useAuth()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault()
		await login(email, password) // Выполняем вход
		console.log(error) // Логируем ошибку для проверки
	}

	return (
		<>
			<div className={styles.container}>
				<LoginTop />

				{error ? <AuthError error={error} /> : ''}

				<form onSubmit={handleLogin} className={styles.form}>
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

					<LoginBottom />
				</form>
			</div>
		</>
	)
}
