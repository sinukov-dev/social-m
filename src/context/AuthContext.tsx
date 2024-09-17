'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { account, databases, ID } from '../app/appwrite'
import { Models } from 'appwrite'
import { useRouter } from 'next/navigation'
import { PageLoader } from '@/components/ui/loader/pageloader'
import { userDataJSON } from '@/data/user'

interface AuthContextType {
	user: Models.User<{}> | null
	loading: boolean
	login: (email: string, password: string) => Promise<void>
	register: (email: string, password: string, name: string) => Promise<void>
	logout: () => Promise<void>
	error: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<Models.User<{}> | null>(null)
	const [error, setError] = useState<any>('')
	const [loading, setLoading] = useState(true)
	const router = useRouter()
	useEffect(() => {
		const fetchUser = async () => {
			try {
				const currentUser = await account.get()
				setUser(currentUser)
			} catch (error: any) {
				setUser(null)
			} finally {
				setLoading(false)
			}
		}

		fetchUser()
	}, [])

	const login = async (email: string, password: string) => {
		try {
			await account.createEmailPasswordSession(email, password)
			const currentUser = await account.get()
			setUser(currentUser)
			setError('')
			router.replace('/')
		} catch (error: any) {
			setError(error.message)
		}
	}

	const register = async (email: string, password: string, name: string) => {
		try {
			const userAccount = await account.create('unique()', email, password, name)
			await login(email, password)

			console.log(userAccount.$id)
			// const currentTimeInSeconds = Math.floor(Date.now() / 1000)
			await databases.createDocument(
				process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
				'66e4403b003cc6e56518', // ID коллекции "Users"
				userAccount.$id, // Уникальный ID документа
				{
					chats: JSON.stringify(userDataJSON.chats),
					name: name,
					createdAt: '20:00'
				},
				['read("user:' + userAccount.$id + '")', 'write("user:' + userAccount.$id + '")']
			)
		} catch (error: any) {
			setError(error.message)
		}
	}

	const logout = async () => {
		try {
			await account.deleteSession('current')
			setUser(null)
			router.replace('/login')
		} catch (error: any) {
			setError(error.message)
		}
	}

	if (loading) {
		return <PageLoader />
	}

	return (
		<AuthContext.Provider value={{ user, loading, login, register, logout, error }}>
			{children}
		</AuthContext.Provider>
	)
}
