'use client'

import Input from '@/components/ui/input/input'
import { useEffect, useState } from 'react'
import { account, ID } from '@/app/appwrite'
import { AtSign, KeyRound, User2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button/button'
import Link from 'next/link'
import { Loader } from '@/components/ui/loader/loader'

export function SignUp() {
	const [loggedInUser, setLoggedInUser] = useState<any>(null)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [name, setName] = useState('')
	const [error, setEror] = useState<any>('')
	const [loadingUser, setLoadingUser] = useState(true)
	useEffect(() => {
		async function getUser() {
			try {
				console.log(await account.get())
				setLoggedInUser(await account.get())
				setLoadingUser(false)
			} catch (e: any) {
				setEror('')
				setLoadingUser(false)
			}
		}
		getUser()
	}, [])
	const login = async (email: string, password: string) => {
		try {
			await account.createEmailPasswordSession(email, password)
			setLoggedInUser(await account.get())
			setEmail('')
			setPassword('')
			setEror('')
		} catch (e: any) {
			console.error(e)
			setEror(e.message)
		}
	}

	const register = async () => {
		try {
			await account.create(ID.unique(), email, password, name)
			await login(email, password)
		} catch (e: any) {
			setEror(e.message)
		}
	}

	const logout = async () => {
		try {
			await account.deleteSession('current')
			setLoggedInUser(null)
		} catch (e: any) {
			console.error(e)
			setEror(e.message)
		}
	}

	if (loadingUser) {
		return (
			<div className={`absolute pos-50-50`}>
				<Loader />
			</div>
		)
	}
	return (
		<>
			<div
				className={`px-32 py-48 max-w-full gap-32 h-full flex flex-col items-center justify-center`}
			>
				<div className={`flex items-center justify-center flex-col`}>
					<p className={`text-48 font-bold`}>Sign Up</p>
					<p className={`text-16 text-center font-light text-g700`}>
						Already have an account?
						<Link href='login' className={`ml-8 font-bold hover:underline text-white`}>
							Log In
						</Link>
					</p>
				</div>
				{error ? (
					<div className={`w-[500px] bg-red-600/10 p-16 rounded-4 text-red-500`}>
						{error}
					</div>
				) : (
					''
				)}

				<form className={`flex flex-col items-center w-[500px] justify-center gap-16`}>
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
					<div className={`flex w-full justify-between mt-24`}>
						<Button type={'button'} className='w-50%' onClick={register}>
							Sign Up
						</Button>
						<div className={`w-50% w-full flex items-center justify-center`}>
							<Link href='/login' className={`transition-opacity hover:opacity-70`}>
								Log In
							</Link>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}
