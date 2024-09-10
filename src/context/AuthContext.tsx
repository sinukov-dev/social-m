'use client'
import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { account } from '../app/appwrite'
import { Models } from 'appwrite'
import { useRouter } from 'next/navigation'

interface AuthContextType {
	user: Models.User<{}> | null
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
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setEror] = useState<any>('')
	const router = useRouter()

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const currentUser = await account.get()
				setUser(currentUser)
			} catch (error: any) {
				if (error.code === 401) {
					setUser(null)
					router.push('/login')
				} else {
					setEror(error.message)
				}
			}
		}

		fetchUser()
	}, [user])

	const login = async (email: string, password: string) => {
		try {
			await account.createEmailPasswordSession(email, password)
			const currentUser = await account.get()
			setUser(currentUser)
			setEmail('')
			setPassword('')
			setEror('')
			router.push('/')
		} catch (error: any) {
			setEror(error.message)
		}
	}

	const register = async (email: string, password: string, name: string) => {
		try {
			await account.create('unique()', email, password, name)
			await login(email, password)
		} catch (error: any) {
			setEror(error.message)
		}
	}

	const logout = async () => {
		try {
			await account.deleteSession('current')
			setUser(null)
			router.push('/')
		} catch (error: any) {
			setEror(error.message)
		}
	}

	return (
		<AuthContext.Provider value={{ user, login, register, logout, error }}>
			{children}
		</AuthContext.Provider>
	)
}
