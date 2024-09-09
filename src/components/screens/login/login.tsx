'use client'
import Input from '@/components/ui/input/input'
import { useEffect, useState } from 'react'
import { account, ID } from '@/app/appwrite'
import { AtSign, KeyRound, User2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button/button'
import Link from 'next/link'
import { Loader } from '@/components/ui/loader/loader'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'

export function Login() {
	const { login, register, user, logout } = useAuth()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const router = useRouter()

	useEffect(() => {
		if (user) {
			router.back()
		}
	}, [router])

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault()
		console.log(31321)
		try {
			await login(email, password)
		} catch (error) {
			console.error('Login failed', error)
		}
	}

	if (user) {
		router.push('/')
	}

	return (
		<>
			<div
				className={`px-32 py-48 max-w-full gap-32 h-full flex flex-col items-center justify-center`}
			>
				<div className={`flex items-center justify-center flex-col`}>
					<p className={`text-48 font-bold`}>Log In</p>
					<p className={`text-16 text-center font-light text-g700`}>
						Don't have an account?
						<Link
							href='/signup'
							className={`ml-8 font-bold hover:underline text-white`}
						>
							Sign Up
						</Link>
					</p>
				</div>
				{/* {error ? (
					<div className={`w-[500px] bg-red-600/10 p-16 rounded-4 text-red-500`}>
						{error}
					</div>
				) : (
					''
				)} */}

				<form
					onSubmit={handleLogin}
					className={`flex flex-col items-center w-[500px] justify-center gap-16`}
				>
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

					<div className={`flex w-full justify-between mt-24`}>
						<Button type={'button'} className='w-50%'>
							Log In
						</Button>
						<div className={`w-50% w-full flex items-center justify-center`}>
							<Link href='/signup' className={`transition-opacity hover:opacity-70`}>
								Sign Up
							</Link>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}
