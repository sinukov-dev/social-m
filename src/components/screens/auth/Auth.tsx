'use client'

import Input from '@/components/ui/input/input'
import { useEffect, useState } from 'react'
import { account, ID } from '@/app/appwrite'
import { AtSign, KeyRound } from 'lucide-react'

type IAuth = {
	type?: 'login' | 'register'
}

export function Auth({ type }: IAuth) {
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
	return (
		<>
			<Input placeholder={'Enter email'} type='email' Icon={AtSign} />
			<Input placeholder={'Enter passWord'} type='password' Icon={KeyRound} />
		</>
	)
}
