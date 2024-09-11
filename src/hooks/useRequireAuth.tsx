import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useRequireAuth = (redirectToLogin = true) => {
	const { user, loading } = useAuth()
	const router = useRouter()

	useEffect(() => {
		if (redirectToLogin && !loading && !user) {
			router.replace('/login')
		}
	}, [user, loading, router, redirectToLogin])

	return { user, loading }
}
