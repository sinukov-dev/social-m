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
			} catch (error) {
				console.error('Error fetching user:', error)
				setUser(null)
				router.push('/login')
			}
		}

		fetchUser()
	}, [])

	const login = async (email: string, password: string) => {
		try {
			await account.createEmailPasswordSession(email, password)
			const currentUser = await account.get()
			setUser(currentUser)
			setEmail('')
			setPassword('')
			setEror('')
			router.push('/')
		} catch (error) {
			console.error('Login error:', error)
		}
	}

	const register = async (email: string, password: string, name: string) => {
		try {
			await account.create('unique()', email, password, name)
			await login(email, password) // Автоматический логин после регистрации
		} catch (error) {
			console.error('Registration error:', error)
		}
	}

	const logout = async () => {
		try {
			await account.deleteSession('current')
			setUser(null)
		} catch (error: any) {
			console.error('Logout error:', error)
			setEror(error.message)
		}
	}

	return (
		<AuthContext.Provider value={{ user, login, register, logout }}>
			{children}
		</AuthContext.Provider>
	)
}
