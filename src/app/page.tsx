'use client'
import { useEffect, useState } from 'react'
import { account, ID } from './appwrite'
import { Home } from '@/components/screens/home/Home'
import type { Metadata } from 'next'
// export const metadata: Metadata = {
// 	title: 'Main page',
// }

export default function ChatsPage() {
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
		return <p className='text-white font-semibold text-lg'>Loading...</p>
	}

	if (loggedInUser) {
		return (
			<div className={`flex flex-col`}>
				<button
					onClick={logout}
					className='max-w-full m-3 p-3 bg-red-600 hover:bg-red-700 text-white rounded-md focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50'
				>
					Logout
				</button>
				<div> auth as: {loggedInUser.name}</div>
				<Home />
			</div>
		)
	}

	return (
		<div className={`px-32 py-48 max-w-full gap-24 h-full flex flex-col items-center justify-center`}>
			<p className={`text-32`}>Not logged in</p>

			{error ? <div className={`w-[500px] bg-red-600/10 p-16 rounded-4 text-red-500`}>{error}</div> : ''}
			<form className={`flex flex-col items-center w-[500px] justify-center gap-16`}>
				<input
					className={`h-64 w-full bg-transparent placeholder:text-g900 placeholder:transition-colors	 focus:placeholder:text-transparent w-full border-b border-white`}
					type='email'
					placeholder='Email'
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>

				<input
					className={`h-64 w-full bg-transparent placeholder:text-g900 placeholder:transition-colors	 focus:placeholder:text-transparent w-full border-b border-white`}
					type='password'
					placeholder='Password'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>

				<input
					className={`h-64 w-full bg-transparent placeholder:text-g900 placeholder:transition-colors	 focus:placeholder:text-transparent w-full border-b border-white`}
					type='text'
					placeholder='Name'
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<div className={`w-full flex gap-24 mt-24`}>
					<button
						className={`w-full border border-white p-16 hover:text-black hover:bg-white transition-colors`}
						type='button'
						onClick={() => login(email, password)}
					>
						Login
					</button>

					<button
						className={`w-full border border-white p-16 hover:text-black hover:bg-white transition-colors`}
						type='button'
						onClick={register}
					>
						Register
					</button>
				</div>
			</form>
		</div>
	)
}
